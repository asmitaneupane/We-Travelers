var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

router.get('/', userController.index);
router.post('/', userController.save);


module.exports = router;
