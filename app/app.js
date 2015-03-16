//var app = angular.module('transporteApp', []);
/*'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/


// Declare app level module which depends on views, and components

'use strict';

var app = angular.module('transporteApp', [
  'ngRoute',
  'transporteApp.inicio'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/inicio'});
}]);
