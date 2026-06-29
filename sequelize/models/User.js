const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("Users",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    nama:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    }
});

module.exports = User;