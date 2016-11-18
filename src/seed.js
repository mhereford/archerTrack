'use strict';

var Archer = require('./models/archer.js');
var Tournament = require('./models/tournament.js');

var archers = [
		'Lillie Hereford',
		'Maddie Hanson',
		'Kyle Sears'
		];

var tournaments = [
		'Mercy Invitational',
		'NASP Regional',
		'KHSAA State Tournament',
		'NASP Individual State Championsip',
		'NASP Nationals'];

archers.forEach(function(archer, index) {
		Archer.find({'name': archer}, function(err, archers) {
				if(!err && !archers.length) {
					Archer.create({selected: false, name: archer});
				};
		});
});

tournaments.forEach(function(tournament, index) {
		Tournament.find({'name': tournament}, function(err, tournaments) {
				if(!err && !tournaments.length) {
					Tournament.create({selected: false, name: tournament});
				};
		});
});

