var mongoose = require("mongoose");

var BandSchema = new mongoose.Schema({
	name: String,
	location: String,
	genre: String,
	members: [Users]
});

var Band = mongoose.model('Band', BandSchema);
module.exports = Band;