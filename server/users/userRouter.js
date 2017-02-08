'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./userEntity');
const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    var newUser = new User({
      username : req.body.username,
      password : req.body.password
    });

    newUser.save().then((doc)=>{
      console.log('Insertion success',doc);
      res.send('insertion success');
    },(err)=>{
      console.log(err);
      res.send(err,'not saved');
    });

    // let user = req.body;
    // res.send('Hello '+user);
});

// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
   User.find({"_id" : "5893135b592d011531583b34"}).then((docs) => {
        res.send({
            docs
        });
    }, (err) => {
        res.send('Cant get the docs', err);
    });
  });

router.delete('/delete', function(req, res) {
  console.log('Inside delete');
  let name = req.body.username;
  User.find({ username: name }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err,users) {
    if (err) throw err;
    else
    res.send("User successfully deleted!");
  });
});

  })


module.exports = router;
