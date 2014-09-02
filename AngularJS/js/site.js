$(function() {

	//alert('dfd');
});

function TodoCtrl($scope, $element) {
	//$scope.totalTodos = 4;
	
	$scope.todos = [
		{text:'Learn AngularJS', done: false}, 
		{text:'Build an app', done: false}
	];
	
	$scope.getTotalTodos = function(){
		return $scope.todos.length;
	};
 
	
	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.formTodoText, done: false});
		$scope.formTodoText = '';
	};
	
	$scope.clearComplete = function() {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;
		});
	};
}