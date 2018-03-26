pro3.controller("cdashctrl",function($scope,$http,myfactory,$filter){

    $http({
        method : "GET",
        url : "http://192.168.2.184:5000/allocatelist"
    }).then(function allocate(resp){
        $scope.allocate = resp.data;
        $scope.allocate1 = $scope.allocate.response;
        console.log($scope.allocate1);
    })

$scope.addNew = function(){
    console.log($scope.alloc);
    $scope.addNew.dateAssigned = $filter('date')($scope.addNew.dateAssigned,"MM/dd/yyyy");
    myfactory.allocated(JSON.stringify($scope.alloc)).then(function(data){
        $scope.allocatelist = data;
        console.log($scope.allocatelist);
    },function(err){
      if(err){
          $scope.errorMessage = err;
      }else{
          $scope.errorMessage = err;
      }
    })
    document.allocatedata.reset();
}
})
