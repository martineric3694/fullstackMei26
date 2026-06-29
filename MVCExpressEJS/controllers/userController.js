const model = require('../models/userModel');

exports.getAll=(req,res)=>{
    const data = model.allData();
    console.log("====="+data)
    // res.render('user',{title:'User List',body : 'Isi dari User List',data});
    res.status(200).render('user',{title:'User List',body : 'Isi dari User List',data});
};