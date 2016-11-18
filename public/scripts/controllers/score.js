'use strict';



/************Score Controller - Controls Score *************/
angular.module('archerTrack')
	.controller('scoreCtrl', function($scope, scoreDataService){
	
	scoreDataService.getScores(function(response){
		var scores = response.data.scores;
		$scope.scores = scores;
	});	
	
	$scope.addScore = function(score) {
			$scope.scores.push(score);

		scoreDataService.addScore(score);
	};

	$scope.deleteScore = function(scores, $index) {
		console.log("controller" + scores);
		var filteredScores = $scope.scores.filter(function(score){
			if(score.selected) {
				return score;
			};	
		})
			scoreDataService.deleteScores(filteredScores);
			
	};
	
	$scope.saveScores = function(scores, $index) {
		var filteredScores = $scope.scores.filter(function(score){
			if(score.edited) {
				return score;
			};		
		})
		scoreDataService.saveScores(filteredScores)
		.finally($scope.resetScoreState());
	};

		$scope.updateScores = function(scores, $index) {
		var filteredScores = $scope.scores.filter(function(score){
			if(score.selected) {
				return score;
			};		
		})
		scoreDataService.saveScores(filteredScores)
		.finally($scope.resetScoreState());
	};

	$scope.resetScoreState = function() {
		$scope.scores.forEach(function(score) {
			score.selected = false;
		});
	};

});
