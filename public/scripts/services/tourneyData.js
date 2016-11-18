'use strict';

/*************Tournaments Data Service*************/
angular.module('archerTrack')
.service('tourneyDataService', function($http, $q){
	this.getTournaments = function(callback){
    	$http.get('/api/tournaments').then(callback)
 	};

/*************Add Tournament Function*************/		
	this.addTournament = function(tournament) {
		var request;
		var queue = [];
		console.log("Service: " +  tournament);
		request = $http.post('/api/tournaments', tournament);		
		queue.push (request);
		
		return $q.all(queue).then(function(results) {
			console.log("Tournament " + tournament.name + " saved!");
		});
	};	

/*************Delete Tournaments Function*************/	
	this.deleteTournaments = function(tournaments) {
		tournaments.forEach(function(tournament) {
		if (tournament._id) {
		  return $http.delete('/api/tournaments/' + tournament._id).then(function() {
			console.log("I deleted " + tournaments.length + " tournaments!");
			});
		};
	});
	};	
/*************Save Tournaments Function*************/			
	this.saveTournaments = function(tournaments) {
		var request;
	   var queue = [];
		console.log("service: " + tournaments);
	    tournaments.forEach(function(tournament) {
	    	var request;
	    	if(!tournament._id) {
	    		request= $http.post('/api/tournaments', tournament)
	    } else {
	    	
			request = $http.put('api/tournaments/' + tournament._id, tournament).then(function(result){
	    		tournament = result.data.tournament;
				console.log("PUT " + tournament);
	    		return tournament;
	    	})
	    }
		queue.push(request);
	});
	 return $q.all(queue).then(function(results) {
	 	console.log("Saved " + tournaments.length + " tournaments!");
		});
	};
});

