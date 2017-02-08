var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  _id	 :  {type :Number, required : true},
  resPhoto : {type :String},
  resName : {type :String, required : true},
  resLoc : {type :String, required : true},
  rating : {type :Number, required : true},
  resReview : {type :String},
	res : 	{type : String},
  comments : { type : String}
});

var Resturant = mongoose.model('Resturant',schema);

module.exports = Resturant;
