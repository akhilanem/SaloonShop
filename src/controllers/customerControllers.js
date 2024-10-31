const database = require("../../config/database_config");

const createCustomerController = async (req,res) => {
   try { 
    const {first_name,last_name,phone_number,email_address,password,location_name,latitude,longitude} = req.body;
    const create_cutomer = await database.models.customer_model.create({first_name,last_name,phone_number,email_address,password,location_name,latitude,longitude});
    res.status(201).json({
        status : "success",
        message : "customer is created successfully",
        userData: create_cutomer
    })
    }
   catch(error) {
    res.status(400).json({
        status : "failure",
        message : "Please send the customer details correctly!",
        code : error
    })
    console.log("error is ",error);
   }
} 

const updateCustomerController = async (req,res) => {
    try{
        const {first_name,last_name,phone_number,email_address,password,location_name,latitude,longitude} = req.body;
        const customerDetails = await database.models.customer_model.findOne({
            where: {
                first_name: first_name
            }
        })
        if(customerDetails){
            const updatedCustomer = await database.models.customer_model.update({first_name,last_name,phone_number,email_address,password,location_name,latitude,longitude},
                {
                    where: {
                        first_name: first_name
                    }
                }
            )
        }
        res.status(201).json({
            status: "success",
            message: "Customer is updated successfully"
        })
    }
    catch(error){
        res.status(401).json({
            status: "failure",
            message: "Please update the customer details correctly",
            code: error
        })
        console.log("error is",error)
    }
}

const deleteCustomerController = async (req,res) => {
    try{
        const {first_name} = req.body;
        await database.models.customer_model.destroy({
            where: {
                first_name: first_name
            }
        })
        res.status(200).json({
            status: "success",
            message: "Customer details have been deleted successfully"
        })
    }
    catch(error){
        res.status(401).json({
            status: "failure",
            message: "Please delete the customer details correctly",
            code: error
        })
        console.log("error is",error)
    }
}

const customerLoginController = async (req,res) => {
    try{
        const {phone_number,password} = req.body
        const customerDetails = await database.models.customer_model.findOne({
            where: {
                phone_number : phone_number
            }
        })
        if(customerDetails){
            console.log("---customerDetails---",customerDetails)
            if((customerDetails?.dataValues?.phone_number === phone_number) && (customerDetails?.dataValues?.password === password)){
                res.status(200).json({
                    status: "success",
                    message: "Login Successful"
                })
            }
            else{
                res.status(200).json({
                    status: "failure",
                    message: "Please enter the password correctly"
                })
            }
        }
        else{
            res.status(200).json({
                status: "failure",
                message: "Please enter the phone number correctly"
            })
        }
    }
    catch(error){
        res.status(401).json({
            status: "failure",
            message: "Please enter the correct Mobile Number",
            code: error
        })
        console.log("error is",error)
    }
}

const mobileNumberValidationController = async (req,res) => {
    const {phone_number} = req.body
    const customerDetails = await database.models.customer_model.findOne({
        phone_number : phone_number
    })
    if(customerDetails){
        res.status(200).json({
            status: "success",
            message: "Phone Number is validated correctly",
            customerData: customerDetails
        })
    }
    else{
        res.status(400).json({
            status: "failure",
            message: "Phone Number is invalid! Please enter the correct phone Number"
        })
    }
}

const forgetPasswordController = async (req,res) => {
    const {id,password} = req.body
    const customerDetails = await database.models.customer_model.findOne({
        where: {
            id : id
        }
    })
    if(customerDetails){
        await database.models.customer_model.update({password: password},{
            where : {
                id: customerDetails?.dataValues?.id
            }
        })
        res.status(200).json({
            status: "success",
            message: "Customer Details are updated successfully"
        })
    }
    else{
        res.status(400).json({
            status: "failure",
            message: "Phone Number is not valid"
        })
    }
}


module.exports = {createCustomerController,updateCustomerController,deleteCustomerController,customerLoginController,forgetPasswordController,mobileNumberValidationController};