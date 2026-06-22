const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>res.send('List Product'));

module.exports=router;