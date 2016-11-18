'use strict';

var angular = require('angular');

angular.module('archerTrack').controller('mainCtrl', require('./main'));
angular.module('archerTrack').controller('tournamentCtrl', require('./tournament'));
angular.module('archerTrack').controller('scoreCtrl', require('./scores'));