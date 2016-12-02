 // template example directive, you should change the name of the file and templateUrl when using
 app.directive('exampleDirective', function() {
   return {
     restrict: 'E', // used to denote the template html is used to create new html in the view
     scope: {info: '='}, // uses the 'info' variable to pass information to it
     templateUrl: 'js/directives/exampleDirective.html'
   };
}); 