const router = require('express').Router();
const c = require('../controllers/userController');

router.get("/",c.getAll);

module.exports=router;