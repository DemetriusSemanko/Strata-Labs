const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function(req, res) {
    shark.index(req,res);
});

router.post('/addshark', function(req, res) {
    shark.create(req,res);
});

router.get('/getshark', function(req, res) {
    shark.list(req,res);
});

router.get('/sharks', async (req, res) => {
    try {
        const sharks = await Shark.find();  // Fetch latest data
        res.render('sharks', { sharks });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;