module.exports = (sequelize, DataTypes) => {
    const customer = sequelize.define("Customer", {
        first_name : {
            type : DataTypes.STRING
        },
        last_name : {
            type : DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        email_address: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        location_name : {
            type : DataTypes.STRING
        },
        latitude: {
            type: DataTypes.STRING
        },
        longitude: {
            type: DataTypes.STRING
        },

    })

    return customer;
}