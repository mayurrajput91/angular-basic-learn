var app = angular.module('myapp', []);

app.controller('MyController', ['$scope', function($scope){
	$scope.sname = 'Jayveer Rajput';
	$scope.age = 28;
}])