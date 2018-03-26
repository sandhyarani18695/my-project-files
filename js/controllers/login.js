
pro3.controller("loginctrl",function($scope,$location){
	$scope.login = function(){
		if($scope.emailid == "" || $scope.emailid == null){
			alert("please enter emailid");
		}else if($scope.password == "" || $scope.password == null){
                  alert("please enter password");
		}else if($scope.emailid == "admin@gmail.com" && $scope.password == "6789"){
			$location.path('/admin')
		}else if($scope.emailid == "customer@gmail.com" && $scope.password == "6789"){
			$location.path('/customer')
		}else if($scope.emailid == "vendor@gmail.com" && $scope.password == "6789"){
			$location.path('/vendor')
		}else{
			alert("Email Id or Password wrong");
		}
	}
})