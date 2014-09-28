// JavaScript Document
$(function () {
    //alert('jQuery ready');
});

var formApp = angular.module('formApp', []);

formApp.controller('formController', formController);

function formController($scope) {

    $scope.isRed = true;

    $scope.changeColor = function() {
        $scope.isRed = false;
    }

    $scope.todos = [{ action: "Get groceries", complete: false },
        { action: "Call plumber", complete: false },
        { action: "Buy running shoes", complete: true },
        { action: "Buy flowers", complete: false },
        { action: "Call family", complete: false }];

    $scope.locations = [{ name: 'Home' }, { name: 'Office' }, { name: 'Mall' }];

    $scope.addNewItem = addNewItem;

    function addNewItem(newTodo) {
        $scope.todos.push(
            {
                action: newTodo.action + ' at ' + newTodo.location.name,
                complete: false
            });

    }

}

 

 