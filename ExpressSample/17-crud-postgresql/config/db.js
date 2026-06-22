const {Pool}=require('pg');

module.exports=new Pool({
    host:'localhost',
    user:'postgres',
    password:'123456',
    database:'training',
    port:5432
});