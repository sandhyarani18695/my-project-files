pro3.controller("aboutCtrl",function($scope,$http){
    
    $http.get("http://shamba.shambadigital.com/Shamba/county").
    then(function(response){
      $scope.countrylist = response.data;
     $scope.country = $scope.countrylist.result;
      console.log($scope.countrylist)
    })
})