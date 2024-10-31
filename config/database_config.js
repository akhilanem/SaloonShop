
const { Sequelize , DataTypes} = require("sequelize");

const customerModel = require("../src/models/customer_model");
const ownerModel = require("../src/models/owner_model");
const saloonModel = require("../src/models/saloon_model");
const saloonServiceModel = require('../src/models/saloon_service_model');


const instanceSequelize = new Sequelize ("testdb2", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});


const models = {
    customer_model : customerModel(instanceSequelize,DataTypes),
    owner_model: ownerModel(instanceSequelize,DataTypes),
    saloon_model: saloonModel(instanceSequelize,DataTypes),
    saloon_service_model: saloonServiceModel(instanceSequelize,DataTypes)
}

models.owner_model.hasMany(models.saloon_model);
models.saloon_model.belongsTo(models.owner_model);
models.saloon_service_model.hasMany(models.saloon_model);
models.saloon_model.belongsTo(models.saloon_service_model);

module.exports = {instanceSequelize,models};