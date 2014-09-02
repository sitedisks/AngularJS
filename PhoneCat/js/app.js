var sampleApp = angular.module('sampleApp', ['ngRoute']);
var controllers = {}; // controllers container
// Define the routing of the app
// Uri /AddNewOrder -> template add_order.html, controller: AddOrderController
// Uri /ShowOrders -> template show_orders.html, controller: ShowOrdersController
sampleApp.config(function($routeProvider){
		$routeProvider.
			when('/AddNewOrder',{
				templateUrl: 'templates/add_order.html',
				controller: 'AddOrderController'
			})
			.when('/ShowOrders',{
				templateUrl: 'templates/show_orders.html',
				controller: 'ShowOrdersController'
			})
			.when('/ShowOrder/:orderId',{
				templateUrl: 'templates/show_order.html',
				controller: 'ShowOrderController'
			})
			.otherwise({
				redirectTo: '/AddNewOrder'
			});
});

// mock order data
var orderlist = [
	{id: 1234, name: "15 Samsung Laptop"}
	,{id: 1235, name: "2TB Seagate Hard drive"}
	,{id: 1236, name: "D-link router"}
	]
	
/* factory */
sampleApp.factory('sampleFactory', function() {
	// $http  to make an AJAX call tell AngularJS 'Inject in the AngularJS http object'
	// http get/put/post and delete ype of calls to for instance RESTFull APIs.
	// Factory to load the data :)

	var factory = {};
	
	factory.getOrders = function() {
		return orderlist;
	};
	
	factory.postOrder = function() {
		
	};
	
	return factory;
});	

sampleApp.controller('ShowOrdersController',function($scope, sampleFactory){
	$scope.message = "Show orders:";
	$scope.orders = sampleFactory.getOrders();
})

.controller('ShowOrderController',function($scope, $routeParams){
	$scope.order_id=$routeParams.orderId;
});

sampleApp.controller('AddOrderController',function($scope){
	$scope.message = "Add new order";
});

