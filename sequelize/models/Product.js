const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Product extends Model{
    static async getAll(){
        return await Product.findAll();
    }
    static async addData(data){
        return await Product.create(data);
    }
}
Product.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING
    }
},{
    sequelize
});

module.exports = Product;