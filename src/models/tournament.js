'use strict';

var mongoose = require('mongoose');

var tournamentSchema = new mongoose.Schema({
	name: String,
	host: String,
	date: Date,
	selected: Boolean
});

var model = mongoose.model('Tournament', tournamentSchema );

module.exports = model;