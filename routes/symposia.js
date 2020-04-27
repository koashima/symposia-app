var express = require('express');
var router = express.Router();
const symposiaCtrl = require('../controllers/symposias');

const isAuth = (req, res, next) => { 
    req.isAuthenticated() ? next() : res.redirect('/auth/google');    
};

router.get('/', symposiaCtrl.index);
router.get('/new', isAuth, symposiaCtrl.new);

router.get('/chronicle', isAuth, symposiaCtrl.chronicle);
router.post('/chronicle', isAuth, symposiaCtrl.create);
router.get('/list', isAuth, symposiaCtrl.list);
router.get("/:id/edit", symposiaCtrl.edit);
router.get('/:id',  isAuth, symposiaCtrl.show);
router.delete('/:id', symposiaCtrl.delsymposium);
router.put('/:id', symposiaCtrl.update);
module.exports = router;