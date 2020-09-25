const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')


//routes
const userRoute = require('./routes/users.route');

//initialize express
const app = express();

//initialize mongodb
mongoose.connect('mongodb://127.0.0.1:27017/?readPreference=primary&gssapiServiceName=mongodb&appname=MongoDB%20Compass&ssl=false')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(error => {
    console.log('Error occured while connecting to database. '+error );
  })

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  next();
});

app.use(bodyParser.json());

app.use('/api/v1/users', userRoute);

module.exports = app;
