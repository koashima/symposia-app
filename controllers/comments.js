const Symposium = require('../models/symposium');

const create = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
        console.log(req.body);
        symposium.comments.push(req.body);
        symposium.save( (err) => {
            res.redirect(`/symposia/${symposium._id}`);
        });
    });
};

module.exports = {
  create
};