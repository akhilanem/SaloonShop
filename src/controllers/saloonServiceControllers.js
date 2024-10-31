const database = require("../../config/database_config");

const createSaloonServiceController = async (req,res) => {
   try { 
    const {service_name,service_image,service_rank} = req.body;
    const saloon_service = await database.models.saloon_service_model.create({service_name,service_image,service_rank});
    res.status(201).json({
        status : "success",
        message : "saloon service is created successfully",
        userData: saloon_service
    })
    }
   catch(error) {
    res.status(401).json({
        status : "failure",
        message : "Please enter the service details correctly!",
        code : error
    })
    console.log("error is ",error);
   }
} 

module.exports = {createSaloonServiceController};