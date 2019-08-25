var express = require('express');
var router = express.Router();
var cabController = require('../controllers/cabController');

router.get('/', cabController.index);
router.post('/', cabController.save);


module.exports = router;