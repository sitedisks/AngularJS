function HelloController($scope) {
	$scope.greeting = { text: 'Hello' };
}

var toDoListItems = [
	{task: 'Alex Smith', status: 'not done'}
	,{task: 'Peter Wang',status: 'not done'}
	,{task: 'Elsie Wang', status: 'done'}
	]

var datalist = ['Dave','Napur','Heedy','Shriva']
var datalist2 = [{},{},{},{}];


function cwanController($scope) {
	$scope.me = {alpha: 'Sitedisks', beta: 'Lowata', omega: 'OceaniaTrade'};
	$scope.datalist = datalist;
	$scope.todo = toDoListItems;
}


var customers = [{name: 'Dave Jones', city: 'Phoenix'}
		,{name:'Jamie Riley',city:'Atlanta'}
		,{name:'Heedy Wahlin',city:'Chandler'}
		,{name:'Thomas Winter',city:'Seattle'}];

function SimpleController($scope) {
	$scope.customers=customers;
}