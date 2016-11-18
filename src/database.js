'use script'
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/archerTrackDB');
require('./models/archer');
require('./models/tournament');
require('./models/score');

var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connect error: '));
	db.once('open', function(){
		console.log('Connection to archerTrack Mongo DB successful.');
	});



	