'use strict';

angular.module('archerTrack')
.service('scoreDataService', function($http, $q){
	this.getScores = function(callback){
    	$http.get('/api/scores').then(callback)
 	};

	this.addScore = function(score) {
		var request;
		var queue = [];
		console.log("Service: " +  score);
		request = $http.post('/api/scores', score);		
		queue.push (request);
		
		return $q.all(queue).then(function(results) {
			console.log("Score " + score.name + " saved!");
		});
	};
		
	this.deleteScores = function(scores) {
		scores.forEach(function(score) {
		if (score._id) {
		  return $http.delete('/api/scores/' + score._id).then(function() {
			console.log("I deleted " + scores.length + " scores!");
			});
		};
	});
};
	this.saveScores = function(scores) {
	var queue = [];
	console.log("service: " + scores);
    scores.forEach(function(score) {
      var request;
      if(!score._id) {
        request = $http.post('/api/scores', score);
      } else {
        request = $http.put('/api/scores/' + score._id, score).then(function(result) {
          score = result.data.score;
          return score;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + scores.length + " scores!");
    });
  };
});
