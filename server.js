const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

const database = require("./config/database_config");

const customerRoutes = require("./src/routes/customer_routes");
const ownerRoutes = require("./src/routes/owner_routes");
const saloonRoutes = require("./src/routes/saloon_routes");
const saloonServiceRoutes = require("./src/routes/saloon_service_routes");


var corsOptions = {
    origin : "*",
    corsSuccessStatus : 200
};

const PORT = 5001;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/customer", customerRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/saloon", saloonRoutes);
app.use("/api/saloonService",saloonServiceRoutes);


async function init() {
    try {
        
    await database.instanceSequelize.authenticate();
    console.log(`mysql database connected successfully`);

    app.use(compression());

    app.use(cors(corsOptions));

    app.listen(PORT, function () {
        console.log(`server start connecting to port ${PORT}`);
    });
    } catch(error) {
        console.log(`unable to connect mysql database ${error}`);
    }
}

init();


database.instanceSequelize.sync({force: false})
.then(() => {
    console.log("model is synchronised properly");
})
.catch((error) => {
    console.log("model is not syc", error);
});