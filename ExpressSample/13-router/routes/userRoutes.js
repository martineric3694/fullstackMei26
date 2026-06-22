const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>res.send('List User'));
router.get('/data',(req,res)=>res.send('Data User'));


module.exports=router;