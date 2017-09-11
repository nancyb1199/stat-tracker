const express= require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

router.use(bodyParser.json());

const Act = require("../models/act");

// return a single activity by id
router.get('/activities/:id', function(req, res) {
  Act.find({_id: req.params.id}).then(function(results) {
    return res.json(results);
  });
});

// update a single entry
router.put('/activities/:id', function(req, res) {
  Act.findOneAndUpdate(
    {_id: req.params.id},
    {activity: req.body.activity,
      date: req.body.date,
      amount: req.body.amount})
      .then(function(results) {
      return res.json(results);
    });
});

// Add tracked data for a day. The data sent with this should include the day tracked.
// You can also override the data for a day already recorded.
router.post('/activities/:id/stats', function(req, res) {
  // I think my data is maybe structured wrong because I don't really see how this is
  // different from my regular post...
});

// Remove tracked data for a day.
router.delete('/stats/:id', function(req, res) {
  // trying to pull by id, find the date for that entry and then
  // delete everything with the same date. It doesn't work
  Act.findOne({id: req.params.id})
  .then(function(results) {
    let tempdate = this.date;
    console.log(tempdate);
  });
  Act.delete({date: tempdate})
  .then(function(results) {
    return res.json(results);
  });
});

// remove an activity by id
router.delete('/activities/:id', function(req, res) {
  Act.deleteOne({_id: req.params.id})
      .then(function(results) {
      return res.json(results);
    });
});

// get all activities
router.get('/activities', function(req, res) {
    Act.find().then(function(results) {
      return res.json(results);
    });
});

// create a new activity entry
router.post('/activities', function(req, res) {
  Act.create(req.body).then(function(results) {
    return res.json(results);
  });
});



module.exports = router;
