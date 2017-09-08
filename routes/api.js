const express= require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

router.use(bodyParser.json());

const Act = require("../models/act");
// const Act = models.act;


// endpoints in this file are nested under '/api'

router.get('/activities', function(req, res) {
    Act.find().then(function(results) {
      return res.json(results);
    });
});
router.post('/activities', function(req, res) {
  console.log(req);
  Act.create({
    activity: req.params.activity,
    date: req.params.date,
    amount: req.params.amount
    });
});




module.exports = router;
