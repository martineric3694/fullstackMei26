const m=require('../models/userModel');

exports.index=(req,res)=>res.json(m.getUsers());
exports.getData=(req,res)=>{
    let a = 10+10;
    res.send("Get Data "+a);
};
    