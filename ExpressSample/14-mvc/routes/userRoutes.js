const r=require('express').Router();

const c=require('../controllers/userController');

r.get('/',c.index);
r.get('/data',c.getData);

module.exports=r;