'use strict';

angular.module('transporteApp.inicio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inicio', {
    templateUrl: 'inicio/inicio.html',
    controller: 'InicioCtrl'
  });
}])

.controller('InicioCtrl', [function() {

}]);