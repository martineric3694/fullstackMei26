const {DataTypes} = require("sequelize");
const db = require("../config/database");

const Employee = db.define("employee",{

    name:{
        type:DataTypes.STRING
    },

    position:{
        type:DataTypes.STRING
    },

    salary:{
        type:DataTypes.INTEGER
    }

});

module.exports = Employee;