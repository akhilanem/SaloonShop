const express = require("express");
const router = express.Router();

const ownerControllers = require("../controllers/ownerControllers");

router.post("/createOwner", ownerControllers.createOwnerController);
router.post("/updateOwner", ownerControllers.updateOwnerController);
router.post("/deleteOwner", ownerControllers.deleteOwnerController);


module.exports = router;