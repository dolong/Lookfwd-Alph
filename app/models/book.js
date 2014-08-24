var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.ObjectId
	
var BookSchema = new mongoose.Schema({
	id: {type: ObjectId},
	date: {type: Date},
	title: {type: String, unique: true},
    series: {type: String},
	author: {type: String},
	amazon: {type: String},
	image: {type: String},
	desc: {type: String}
})

module.exports = mongoose.model('Books', BookSchema)