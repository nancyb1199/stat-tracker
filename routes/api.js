const express= require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

router.use(bodyParser.json());

const Act = require("../models/act");
// const Act = models.act;

router.get('/activities/:id', function(req, res) {
  console.log('in activities/id');
  console.log(req.params.id);
  Act.find({_id: req.params.id}).then(function(results) {
    return res.json(results);
  });
});

router.get('/activities', function(req, res) {
    Act.find().then(function(results) {
      return res.json(results);
    });
});
router.post('/activities', function(req, res) {
  console.log(req);
  Act.create(req.body);
});



module.exports = router;
