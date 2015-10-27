var mongoose = require("mongoose"),
	User = require('./user');

// create schema
var BandSchema = new mongoose.Schema({
	name: String,
	location: String,
	genre: String,
	members: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

// create a model
var Band = mongoose.model('Band', BandSchema);
// export file
module.exports = Band;