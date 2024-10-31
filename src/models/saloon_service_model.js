module.exports = (sequelize,DataTypes) => {
    const saloonService = sequelize.define("SaloonService",{
        service_name : {
            type: DataTypes.STRING
        },
        service_image: {
            type: DataTypes.STRING
        },
        service_rank: {
            type: DataTypes.STRING
        }
    })

    return saloonService;
}