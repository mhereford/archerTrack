'use strict';

angular.module('archerTrack')
.service('dataService', function($http, $q){
	this.getArchers = function(callback){
    	$http.get('/api/archers').then(callback)
 	};

	this.addArcher = function(archer) {
		var request;
		var queue = [];
		console.log("Service: " +  archer);
		request = $http.post('/api/archers', archer);		
		queue.push (request);
		
		return $q.all(queue).then(function(results) {
			console.log("Archer " + archer.name + " saved!");
		});
	};
		
	this.deleteArchers = function(archers) {
		archers.forEach(function(archer) {
		if (archer._id) {
		  return $http.delete('/api/archers/' + archer._id).then(function() {
			console.log("I deleted " + archers.length + " archers!");
			});
		};
	});
};
	this.saveArchers = function(archers) {
	var queue = [];
	console.log("service: " + archers);
    archers.forEach(function(archer) {
      var request;
      if(!archer._id) {
        request = $http.post('/api/archers', archer);
      } else {
        request = $http.put('/api/archers/' + archer._id, archer).then(function(result) {
          archer = result.data.archer;
          return archer;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + archers.length + " archers!");
    });
  };
});
