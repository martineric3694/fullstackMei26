const pool=require('../config/db');

exports.getUsers=async(req,res)=>{
    const r=await pool.query('SELECT * FROM users');
    res.json(r.rows)
};