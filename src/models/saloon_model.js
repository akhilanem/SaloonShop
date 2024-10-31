module.exports = (sequelize,DataTypes) => {
    const saloon = sequelize.define("Saloon",{
        saloon_name : {
            type: DataTypes.STRING
        },
        saloon_service: {
            type: DataTypes.STRING
        },
        latitude: {
            type: DataTypes.STRING
        },
        longitude: {
            type: DataTypes.STRING
        },
        location_name: {
            type: DataTypes.STRING
        }
    })

    return saloon;
}