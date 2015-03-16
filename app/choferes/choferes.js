'use strict';

angular.module('transportesApp.choferes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/choferes', {
    templateUrl: 'choferes/choferes.html',
    controller: 'ChoferesCtrl'
  });
}])

.controller('ChoferesCtrl', [function() {

}]);