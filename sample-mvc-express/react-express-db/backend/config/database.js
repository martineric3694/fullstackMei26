const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "reactcrud",
    "root",
    "root",
    {
        host:"localhost",
        dialect:"mysql"
    }
);

module.exports = sequelize;