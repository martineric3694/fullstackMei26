const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Kelas = sequelize.define("Kelas",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    nama:{
        type:DataTypes.STRING,
    }
});

module.exports = Kelas;