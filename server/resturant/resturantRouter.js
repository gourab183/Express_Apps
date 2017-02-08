'use strict';
var express = require('express');
var router = express.Router();

var Resturant = require('./resturantEntity.js');
var resturantController = require('./resController.js');

// Get all resturant
router.get('/resturant', resturantController.Getresturant);

// Create new resturant
router.post('/resturant', resturantController.Postresturant);

// Delete a resturant based on :id
router.delete('/resturant/:id', resturantController.Deleteresturant);

// Update a resturant based on :id
router.put('/resturant/:id', resturantController.Updateresturant);

module.exports = router;