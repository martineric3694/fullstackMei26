const r=require('express').Router();
const c=require('../controllers/userController');
r.get('/',c.getUsers);

module.exports=r;