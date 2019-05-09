
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
      $scope.myWelcome = response.data;
  });
});
