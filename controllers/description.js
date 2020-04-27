  const Symposium = require('../models/symposium');


const create = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
        symposium.description = req.body.description.valueOf();
        symposium.save( (err) => {
            res.redirect(`/symposia/${symposium._id}`);
        });
    });
}

module.exports = {
  create
};