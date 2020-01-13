var app =angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'LoginAppForm.html'
	})
	.when('/dashboard',{
		resolve:{
			"Check": function($location,$rootScope){
				if(!$rootScope.LoggedIn){
					$location.path('/');
				}				
			}			
		},
		template:"Welcome User!"
	})
	.otherwise({
		redirectTo:'/'
	});
});
app.controller('loginCtrl',function($scope,$location,$rootScope){
	$scope.submit = function(){				
		if($scope.UserName=="admin" && $scope.Password == 'admin'){
			$rootScope.LoggedIn = true;
			$location.path('/dashboard');
		}
		else{
			alert("UserName or password not Matched")
		}
	}
});