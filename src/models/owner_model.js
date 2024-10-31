module.exports = (sequelize,DataTypes) => {
    const owner = sequelize.define("Owner",{
        first_name : {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        email_address: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })

    return owner;
}