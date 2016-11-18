'use strict';

var mongoose = require('mongoose');

var archerSchema = new mongoose.Schema({
	name: String,
	school: String,
	class: String,
	gender: String,
	selected: Boolean
});

var model = mongoose.model('Archer', archerSchema );

module.exports = model;