var myApp = angular.module('myStatefulFilterApp', []);

myApp.filter('decorate', ['decoration', function(decoration) {

  function decorateFilter(input) {
    return decoration.symbol + input + decoration.symbol;
  }
  decorateFilter.$stateful = true;

  return decorateFilter;
}]);

myApp.controller('MyController', ['$scope', 'decoration', function($scope, decoration) {
  $scope.greeting = 'hello';
  $scope.decoration = decoration;
}]);

myApp.value('decoration', {symbol: '*'});