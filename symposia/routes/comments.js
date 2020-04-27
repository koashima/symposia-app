var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/symposia/:id/comments', commentsCtrl.create);

module.exports = router;