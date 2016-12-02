// creates the main page controller, holds data to be used in the html creation
app.controller('MainController',['$scope', 'suggestions', function($scope, suggestions) {
// Controller code here
	
	// takes JSON objects from suggestions and defines them to posts
	$scope.posts = suggestions.posts;

	// takes suggestions made on the website and stores them to the JSON object in suggestions
	$scope.addSuggestion = function() {

		// if scope is empty or null dont create an object
		if($scope.title === "" || !$scope.title){
			return;
		}

		// push suggestion posts in suggestions.js
		// push command adds inside () back onto the variable
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: []
		});


		//after submit, clear input
		$scope.title = "";
	};

	$scope.upVote = function(post) {
		post.upvotes +=1;
		$scope.posts.$save(post);
	};
}]);