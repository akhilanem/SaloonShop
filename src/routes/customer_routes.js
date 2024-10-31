const express = require("express");
const router = express.Router();

const customerControllers = require("../controllers/customerControllers");

router.post("/createCustomer",customerControllers.createCustomerController);
router.post("/updateCustomer",customerControllers.updateCustomerController);
router.post("/deleteCustomer",customerControllers.deleteCustomerController);
router.post("/customerLogin",customerControllers.customerLoginController);
router.post("/forgetPassword",customerControllers.forgetPasswordController);
router.post("/verification",customerControllers.mobileNumberValidationController);


module.exports = router;
