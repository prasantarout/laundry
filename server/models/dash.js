module.exports = (sequelize, DataTypes) =>{
    const Dash = sequelize.define("dash", {
        userEmail : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        newRequest : {
            type : DataTypes.STRING,
            allowNull : false,
        }
    });
    return Dash;
};