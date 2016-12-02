// initiates the app with 'a name', [allows loading additional directives, ngRoute for the routing config below]
var app = angular.module('suggestionBox', ['ngRoute']);

// used to redirect the index html and add the other pages data by changing controllers and locations
app.config(function($routeProvider) { 
  $routeProvider 
    .when('/main', { 
      controller: 'MainController', 
      templateUrl: 'views/main.html' 
    }) 
    .when('/suggestion/:id',{
       controller: "SuggestionController",
       templateUrl: "views/suggestions.html",
    })
    .otherwise({ 
      redirectTo: '/main' 
    }); 
});