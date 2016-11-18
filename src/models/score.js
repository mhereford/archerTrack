'use strict';

var mongoose = require('mongoose');

var scoreSchema = new mongoose.Schema({
	archer_id: 		{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Archer'
					},	
	tournament_id: 	{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Tournament'
					},
	tenMeter1: Number,
	tenMeter2: Number,
	tenMeter3: Number,
	tenMeterTotal: Number,
	tenMeterTens: Number,
	fifteenMeter1: Number,
	fifteenMeter2: Number,
	fifteenMeter3: Number,
	fifteenMeterTotal: Number,
	fifteenMeterTens: Number,
	finalScore: Number,
	finalTens: Number,
	selected: Boolean
});
var model = mongoose.model('Score', scoreSchema );

module.exports = model;