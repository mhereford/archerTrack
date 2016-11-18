'use strict';

var express = require('express');
var parser = require('body-parser');
var Archer = require('../models/archer');
var Tournament = require('../models/tournament');
var Score = require('../models/score');
var router = express.Router();

//****************************ARCHER ROUTES******************************
router.get('/archers', function(req, res){
	 Archer.find({}, function(err, archers){
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({archers: archers});		
	});
});  

//POST Route - Create new Archer
router.post('/archers', function(req, res){
	var archer = req.body;
	Archer.create(archer, function(err, archer){
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'archer': archer, message: 'Archer Created'});
	});
});

//PUT Route - Update existing Archer
router.put('/archers/:id', function(req, res){
	var id = req.params.id;
	var archer = req.body;
		if(archer && archer._id !== id) {
			return res.status(500).json({err: "IDs don't match!"});
		}
		Archer.findByIdAndUpdate(id, archer, {new: true}, function(err, archer){
			if(err) {
					return res.status(500).json({err: err.message});
		}
		res.json({'archer': archer, message: 'Archer Updated'});
	});
});	
	
//DELETE Route - Delete existing Archer
router.delete('/archers/:id', function(req, res) {
  var id = req.params.id;
  Archer.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Archer Deleted' });
  });
});	





	
	// ***********************TOURNAMENT ROUTES******************************
router.get('/tournaments', function(req, res){
	 Tournament.find({}, function(err, tournaments){
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({tournaments: tournaments});		
	});
});  

//POST Route - Create new Tournament
router.post('/tournaments', function(req, res){
	var tournament = req.body;
	Tournament.create(tournament, function(err, tournament){
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'tournament': tournament, message: 'Tournament Created'});
	});
});

//PUT Route - Update existing Tournament
router.put('/tournaments/:id', function(req, res){
	var id = req.params.id;
	var tournament = req.body;
		if(tournament && tournament._id !== id) {
			return res.status(500).json({err: "IDs don't match!"});
		}
		Tournament.findByIdAndUpdate(id, tournament, {new: true}, function(err, tournament){
			if(err) {
					return res.status(500).json({err: err.message});
		}
		res.json({'tournament': tournament, message: 'Tournament Updated'});
	});	
});
//DELETE Route - Delete existing Tournament.
router.delete('/tournaments/:id', function(req, res) {
  var id = req.params.id;
  Tournament.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Tournament Deleted' });
  });
});	

module.exports = router;


//****************************SCORE ROUTES******************************
router.get('/scores', function(req, res){
	 Score.find({}, function(err, scores){
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.json({scores: scores});		
	});
});  

//POST Route - Create new Score
router.post('/scores', function(req, res){
	var score = req.body;
	Score.create(score, function(err, score){
		if(err) {
			return res.status(500).json({err: err.message});
		}
		res.json({'score': score, message: 'Score Created'});
	});
});

//PUT Route - Update existing Score
router.put('/scores/:id', function(req, res){
	var id = req.params.id;
	var score = req.body;
		if(score && score._id !== id) {
			return res.status(500).json({err: "IDs don't match!"});
		}
		Score.findByIdAndUpdate(id, score, {new: true}, function(err, score){
			if(err) {
					return res.status(500).json({err: err.message});
		}
		res.json({'score': score, message: 'Score Updated'});
	});
});	
	
//DELETE Route - Delete existing Score
router.delete('/scores/:id', function(req, res) {
  var id = req.params.id;
  Score.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Score Deleted' });
  });
});	
