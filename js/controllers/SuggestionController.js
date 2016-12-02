// creates the main page controller, holds data to be used in the html creation
app.controller('SuggestionController',['$scope', 'suggestions','$routeParams', function($scope, suggestions, $routeParams) {
// Controller code here $routeParams
	
	$scope.post = suggestions.posts[$routeParams.id];

	// takes JSON objects from suggestions and adds the comments to it
	$scope.addComment = function(){

		// if scope is empty or null dont create an object
		if($scope.title === "" || !$scope.title){
			return;
		}
		// push suggestion posts in suggestions.js
		// push command adds inside () back onto the variable
		$scope.post.comments.push({
			body: $scope.title,
			upvotes: 0,
			
		});
		
		//after submit, clear input
		$scope.title = "";


	};

	$scope.upVote = function(comment) {
		comment.upvotes +=1;
	};

	
}]);