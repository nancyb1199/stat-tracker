const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongoURL = 'mongodb://localhost:27017/stat_api'

mongoose.connect(mongoURL, {
  useMongoClient: true
});

const Act = require("./models/act");
// const Act = models.act;

app.use(session({
  secret: 'yorkie dog',
  resave: false,
  saveUninitialized: true
}));

const apiRouter = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.listen(3000, function(){
  console.log('Started express application!')
});
