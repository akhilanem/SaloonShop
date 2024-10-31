const database = require("../../config/database_config");

const createSaloonController = async (req,res) => {
   try { 
    const {saloon_name,saloon_service,latitude,longitude,location_name,OwnerId,SaloonServiceId} = req.body;
    console.log("---request body----",req.body)
    const create_saloon = await database.models.saloon_model.create({saloon_name,saloon_service,latitude,longitude,location_name,OwnerId,SaloonServiceId});
    res.status(201).json({
        status : "success",
        message : "saloon is created successfully",
        userData: create_saloon
    })
    }
   catch(error) {
    res.status(401).json({
        status : "failure",
        message : "Please enter the saloon details correctly!",
        code : error
    })
    console.log("error is ",error);
   }
} 

const getSaloonsByOwnerController = async(req,res) => {
    const {ownerId} = req.body;
    const ownerSaloons = await database.models.saloon_model.findOne({
        where: {
            OwnerId: ownerId,
          },
    });

    console.log(`Owner Saloons`,ownerSaloons);

    res.status(200).json({
        status : "success",
        message : "saloon is retrieved successfully",
        ownerSaloons: ownerSaloons
    })
}

const getSaloonsByServiceController = async(req,res) => {
    const {serviceId} = req.body;
    const ownerSaloons = await database.models.saloon_model.findOne({
        where: {
            SaloonServiceId: serviceId
        }
    });

    res.status(201).json({
        status : "success",
        message : "saloon is retrieved successfully",
    })
}

const updateSaloonByOwnerController = async(req,res) => {
    const {saloon_name,latitude,longitude,location_name,OwnerId,SaloonServiceId} = req.body;
    const ownerSaloons = await database.models.saloon_model.findOne({
        where: {
            OwnerId : OwnerId
        }
    });

    if(ownerSaloons){
        const updatedSaloons = await database.models.saloon_model.update({ saloon_name,latitude,longitude,location_name,OwnerId,SaloonServiceId},
            {
              where: {
                OwnerId: OwnerId,
              },
            });


        res.status(201).json({
            status: "success",
            message: "Details are updated successfully",
            ownerSaloons: updatedSaloons
        })
        
    }else{
        res.status(401).json({
            status: "failed",
            message: "Please enter the owner details"
        })
    }
}

const deleteSaloonByOwnerController = async(req,res) => {
    const {OwnerId} = req.body;
    await database.models.saloon_model.destroy({
        where: {
            OwnerId: OwnerId
        }
    })

    res.status(200).json({
        status: "success",
        message: "Saloon has been deleted successfully"
    })
}

module.exports = {createSaloonController,getSaloonsByOwnerController,getSaloonsByServiceController,updateSaloonByOwnerController,deleteSaloonByOwnerController};