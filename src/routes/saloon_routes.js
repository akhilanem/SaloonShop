const express = require("express");
const router = express.Router();

const saloonControllers = require("../controllers/saloonControllers");

router.post("/createSaloon", saloonControllers.createSaloonController);
router.post("/getSaloonByOwner",saloonControllers.getSaloonsByOwnerController);
router.post("/getSaloonByService",saloonControllers.getSaloonsByServiceController);
router.post("/updateSaloonByOwner",saloonControllers.updateSaloonByOwnerController);
router.post("/deleteSaloonByOwner",saloonControllers.deleteSaloonByOwnerController);

module.exports = router;