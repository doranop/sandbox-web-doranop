angular.module('sandboxController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Service', function($scope, $http, Service) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		Service.get().success(function() {
console.log("get api successful");
		});
	}]);