// JavaScript Document
$(function () {
    //alert('jQuery ready');
});

var formApp = angular.module('formApp', []);

formApp.controller('formController', formController);

function formController($scope) {

    $scope.todos = [{ action: "Get groceries", complete: false },
        { action: "Call plumber", complete: false },
        { action: "Buy running shoes", complete: true },
        { action: "Buy flowers", complete: false },
        { action: "Call family", complete: false }];

}

 

 