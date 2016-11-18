angular.module('archerTrack')
	.directive('archers', function(){
		return {
			templateUrl: 'templates/archers.html',
			replace: true,
			controller: 'mainCtrl'
		}
	});