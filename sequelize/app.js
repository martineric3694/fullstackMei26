const sequelize = require("./config/database");
const User = require("./models/User");
const Kelas = require("./models/Kelas");
const Product = require("./models/Product");

//Update Data
// async function update(){
//     const user = await User.findByPk(1);
//     user.nama = "Budi";
//     await user.save();
// }
// update();

//Insert Data
// async function insert(){
//     await User.create({
//         nama:"Martin",
//         email:"abc@abc.com"
//     })
// }
// async function insert(){
//     await Product.create({
//         nama:"Pasta Gigi",
//     })
// }
// insert();

async function insertData(){
    const data = {
        name:"Pagar"
    };
    await Product.addData(data);
}
insertData();

//GetAllData
async function getData(){
    // const produk = new Product
    // const result = await produk.getAll()
    const result = await Product.getAll();
    console.log(result);
}
getData();


//Sync Model
// async function main(){
//     try{
//         await sequelize.sync();
//         console.log("Table Created");
//     }catch(err){
//         console.log(err);
//     } 
// }
// main();

// Test Connection
// async function test(){
//     try{
//         await sequelize.authenticate();
//         console.log("Database Connected");
//     }catch(err){
//         console.log(err);
//     }
// }

// test();