var app = angular.module('ngApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/add', {
      templateUrl: 'add.html',
      controller: 'addCtrl'
    }).
    when('/edit/:oid', {
      templateUrl: 'edit.html',
      controller: 'editCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
app.controller('myCtrl', function ($scope) {
  $scope.yo = "asd";
});
app.controller('addCtrl', function ($scope) {
  $scope.yo = "add";
});
app.controller('editCtrl', function ($scope, $routeParams) {
  $scope.yo = "edit";
  $scope.id = $routeParams.oid;
}); 