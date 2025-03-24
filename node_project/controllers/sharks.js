const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/sharks.html'));
};

/*
exports.create = function (req, res) {
    var newShark = new Shark(req.body);
    console.log(req.body);
    newShark.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save shark to database');
        } else {
            res.redirect('/sharks/getshark');
        }
    });
});
*/

exports.create = async function (req, res) {
    try {
        var newShark = new Shark(req.body);
        console.log(req.body);
        await newShark.save();  // Use await to save the shark
        res.redirect('/sharks/getshark');  // Redirect if successful
    } catch (err) {
        res.status(400).send('Unable to save shark to database');  // Handle error
    }
};

/*
exports.list = function (req, res) {
    Shark.find({}).exec(function (err, sharks) {
        if (err) {
            return res.send(500, err);
        }
        res.render('getshark', {
            sharks: sharks
        });
    });
};
*/

exports.list = async function (req, res) {
    try {
        const sharks = await Shark.find({}).exec();  // Use await to get sharks
        res.render('getshark', {
            sharks: sharks
        });
    } catch (err) {
        res.status(500).send(err);  // Handle errors with status 500
    }
};
