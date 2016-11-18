angular.module('archerTrack')
	.directive('scores', function(){
		return {
			templateUrl: 'templates/scores.html',
			replace: true,
			controller: 'scoreCtrl'
		}
	});