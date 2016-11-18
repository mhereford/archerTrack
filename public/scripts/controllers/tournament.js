'use strict';



/************Tournaments Controller*************/
angular.module('archerTrack')
	.controller('tournamentCtrl', function($scope, tourneyDataService){

		tourneyDataService.getTournaments(function(response){
			var tournaments = response.data.tournaments;
			$scope.tournaments = tournaments;
		});

	$scope.addTournament = function(tournament) {
		var newTournament = tournament;
		$scope.tournaments.push(newTournament);
		tourneyDataService.addTournament(newTournament);
	};
	
	$scope.deleteTournament = function(tournament, $index) {
	var filteredTournaments = $scope.tournaments.filter(function(tournament){
		if(tournament.selected) {
			return tournament;
		};	
	})
		tourneyDataService.deleteTournaments(filteredTournaments);
			
	};

	$scope.saveTournments = function(tournaments, $index) {
		var filteredTournaments = $scope.tournaments.filter(function(tournament){
			if(tournanment.edited) {
				return tournament
			};		
		})
		tourneyDataService.saveTournament(filteredTournaments)
		.finally($scope.resetTournamentState());
	};

	$scope.resetTournamentState = function() {
		$scope.tournaments.forEach(function(tournament) {
			tournament.edited = false;
		});
	};
	
	$scope.updateTournaments = function(tournaments, $index) {
		var filteredTournaments = $scope.tournaments.filter(function(tournament){
			if(tournament.selected) {
				return tournament
			};		
		})
		tourneyDataService.saveTournaments(filteredTournaments)
		.finally($scope.resetTournamentState());
	};
	
	})