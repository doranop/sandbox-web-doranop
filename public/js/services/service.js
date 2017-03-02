angular.module('sandboxService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Service', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/get');
			},
			create : function(data) {
				return $http.post('/api/todos', data);
			},
			delete : function(id) {
				return $http.delete('/api/todos/' + id);
			}
		}
	}]);