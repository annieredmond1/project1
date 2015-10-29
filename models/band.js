// REQUIREMENTS //
var mongoose = require('mongoose'),
	User = require('./user');

// DEFINE SCHEMA //
var BandSchema = new mongoose.Schema({
	name: String,
	location: String,
	genres: String,
	image: String,
	summary: String,
	members: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

// create a new model, then export
var Band = mongoose.model('Band', BandSchema);
module.exports = Band;