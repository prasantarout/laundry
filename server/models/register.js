module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define("user2", {
       

        userName : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        userEmail : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        userPhone : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        userPassword : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    });
    // Users.associate = (models) => {
    //     Users.hasMany(models.Dash,{
    //         onDelete: "cascade",
    //     })
    // }
    return Users;
};