var startApp = angular.module('start', ['ngRoute']);	// Module

	/* data */
	var customers = [{name: 'Dave Jones', city: 'Phoenix'}
		,{name:'Jamie Riley',city:'Atlanta'}
		,{name:'Heedy Wahlin',city:'Chandler'}
		,{name:'Thomas Winter',city:'Seattle'}]

/* factory */
startApp.factory('startFactory', function() {
	// $http  to make an AJAX call tell AngularJS 'Inject in the AngularJS http object'
	// http get/put/post and delete ype of calls to for instance RESTFull APIs.
	// Factory to load the data :)

	var factory = {};
	
	factory.getFCustomers = function() {
		return customers;
	};
	
	factory.postCustomer = function() {
		
	};
	
	return factory;
});

/* service */
startApp.service('startService', function() {
	this.getSCustomers = function() {
		return customers;	
	}
});

/* Route config */
startApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/View1', {controller:'CNameController', templateUrl: 'templates/View1.html'})
		.when('/View2',{controller: 'CCityController', templateUrl: 'templates/View2.html'})
		.otherwise({redirectTo: '/'});
}]);




/* controller container */
var controllerContainer = {};

// controllers group
controllerContainer.HelloController = function($scope, startFactory) {
	$scope.greeting = { text: 'Hello' };
	$scope.customers = startFactory.getFCustomers();
}; // not in use, testing only

controllerContainer.CNameController = function($scope, startFactory){
	$scope.customers = startFactory.getFCustomers();
	$scope.addCustomer = function(){
		$scope.customers.push({name:$scope.newCustomer.name, city:$scope.newCustomer.city});
	};
};

controllerContainer.CCityController = function($scope, startService){
	$scope.customers = startService.getSCustomers();
};


startApp.controller(controllerContainer);	// Controllers addon






/*  -- classic way --		
startApp.controller('HelloController',function($scope){
	$scope.greeting = { text: 'Hello' };
	$scope.customers = customers;
});
*/