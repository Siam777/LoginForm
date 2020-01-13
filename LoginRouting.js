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
	.when('/signUp',{
		templateUrl:'SignUp.html'
	})
	.otherwise({
		redirectTo:'/'
	});
});
app.controller('loginCtrl',function($scope,$location,$rootScope){
	$scope.submit = function(){	
	   var name= window.localStorage.getItem('name');
	   var password = window.localStorage.getItem('password');
	   console.log(name,password);			
		if($scope.UserName==name && $scope.Password == password){
			$rootScope.LoggedIn = true;
			$location.path('/dashboard');
		}
		else{
			alert("UserName or password not Matched")
		}
	}
	$scope.signup=function(){
		$location.path('/signUp');
	}
	$scope.RegisterForm = function(Register){
	  	if(Register.Password==Register.ReconfirmPassword){
	  		alert("Now you are Registered");
	  		 window.localStorage.setItem('name',Register.UserName);
	  		 window.localStorage.setItem('password',Register.Password);
	  		$location.path("'/'");
	  	}
	}
});