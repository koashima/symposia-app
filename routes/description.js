  
var express = require('express');
var router = express.Router();
const descriptionCtrl = require('../controllers/description');


router.post('/symposia/:id/description', descriptionCtrl.create);

module.exports = router;