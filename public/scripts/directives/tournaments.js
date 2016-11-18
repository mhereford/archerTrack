angular.module('archerTrack')
	.directive('tournaments', function(){
		return {
			templateUrl: 'templates/tournaments.html',
			replace: true,
			controller: "tournamentCtrl"
		}
	});