const Symposium = require('../models/symposium');
const Contributor = require('../models/contributor');

const index = (req, res, next) => {
    Contributor.findById(req.user)
        res.render('symposia/index', {
            user: req.user,
            name: req.query.name,
        });
};

const chronicle = (req, res) => { 
    Contributor.findById(req.user)
    res.render('symposia/chronicle', {
        user: req.user,
    });
};

const newSymposium = (req, res) => { 
    res.render('symposia/new', {title: 'new symposia', user: req.user});
};

const create = (req, res) => { 
    const symposium = new Symposium(req.body);
    symposium.save(function(err) {
        if(err) return res.redirect('/symposia/new');
    res.redirect(`/symposia/chronicle`);
  });
};

const list = (req, res) => { 
    Symposium.find({}, (err, symposium) => {
        res.render('symposia/list', {user: req.user, symposium});
    });
};

const show = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
        res.render('symposia/show', {user: req.user, symposium})
    });
};

const delsymposium = (req, res) => { 
    Symposium.findById(req.params.id, (err, symposium) => {
        symposium.remove();
        res.redirect('/symposia/list');
    });
};

const edit = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
      res.render("./symposia/edit.ejs", {user: req.user, symposium});
    });
  }

const update = (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
      Symposium.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, symposium) => {
          res.redirect(`/symposia/${symposium._id}`);
        });
    };

module.exports = {
  index,
  chronicle, 
  new: newSymposium, 
  create,
  list, 
  show,
  delsymposium,
  edit,
  update
};