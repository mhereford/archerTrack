'use strict';



/************Main Controller - Controls Archer *************/
angular.module('archerTrack')
	.controller('mainCtrl', function($scope, dataService){
	
	dataService.getArchers(function(response){
		var archers = response.data.archers;
		$scope.archers = archers;
	});	
	
	$scope.addArcher = function(archer) {
			$scope.archers.push(archer);

		dataService.addArcher(archer);
	};

	$scope.deleteArcher = function(archers, $index) {
		console.log("controller" + archers);
		var filteredArchers = $scope.archers.filter(function(archer){
			if(archer.selected) {
				return archer;
			};	
		})
			dataService.deleteArchers(filteredArchers);
	};
	
	$scope.saveArchers = function(archers, $index) {
		var filteredArchers = $scope.archers.filter(function(archer){
			if(archer.edited) {
				return archer;
			};		
		})
		dataService.saveArchers(filteredArchers)
		.finally($scope.resetArcherState());
	};

		$scope.updateArchers = function(archers, $index) {
		var filteredArchers = $scope.archers.filter(function(archer){
			if(archer.selected) {
				return archer;
			};		
		})
		dataService.saveArchers(filteredArchers)
		.finally($scope.resetArcherState());
	};

	$scope.resetArcherState = function() {
		$scope.archers.forEach(function(archer) {
			archer.selected = false;
		});
	};

});
