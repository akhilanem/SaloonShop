const express = require("express");
const router = express.Router();

const saloonServiceControllers = require("../controllers/saloonServiceControllers");

router.post("/createSaloonService", saloonServiceControllers.createSaloonServiceController);



module.exports = router;