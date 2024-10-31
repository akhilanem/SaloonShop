const database = require("../../config/database_config");

const createOwnerController = async (req,res) => {
   try { 
    const {first_name,last_name,phone_number,email_address,password} = req.body;
    const create_owner = await database.models.owner_model.create({first_name,last_name,phone_number,email_address,password});
    res.status(201).json({
        status : "success",
        message : "owner is created successfully",
        userData: create_owner
    })
    }
   catch(error) {
    res.status(401).json({
        status : "failure",
        message : "Please enter the owner details correctly!",
        code : error
    })
    console.log("error is ",error);
   }
} 

const updateOwnerController = async (req,res) => {
    try{
        const {first_name,last_name,phone_number,email_address,password} = req.body;
        const ownerDetails = await database.models.owner_model.findOne({
            where: {
                first_name: first_name
            }
        })
        console.log("---Owner Details-----",ownerDetails);
        if(ownerDetails){
            const updatedOwnerDetails = await database.models.owner_model.update({first_name,last_name,phone_number,email_address,password},
                {
                    where: {
                        first_name: first_name
                    }
                }
            )
        }
        res.status(201).json({
            status: "success",
            message: "Owner details are updated successfully"
        })
    }
    catch(error){
        res.status(401).json({
            status: "failure",
            message: "Please update the customer details correctly",
            code: error
        })
        console.log("error",error)
    }
}

const deleteOwnerController = async ( req,res) => {
    try{
        const {first_name} = req.body;
        await database.models.owner_model.destroy({
            where: {
                first_name: first_name
            }
        })
        res.status(200).json({
            status: "success",
            message: "Owner details have been deleted successfully"
        })
    }
    catch(error){
        res.status(401).json({
            status: "failure",
            message: "Please delete the owner details correctly"
        })
    }
}


module.exports = {createOwnerController,updateOwnerController,deleteOwnerController};