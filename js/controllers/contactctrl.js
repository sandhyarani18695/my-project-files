pro3.controller("contactctrl",function($scope,$http){
$http({
    method:"GET",
    url : "http://62.12.118.38/Shamba/orgList"
}).then(function inventSuccess1(resp){
      $scope.organization = resp.data;
      $scope.invent_data1 = $scope.organization.result;
      console.log($scope.invent_data1)
},function(){
    console.log("somthing went wrong")
})

$http({
    method: "GET",
    url: "http://192.168.2.184:5000/department" 
}).then(function inventSuccess(respons) {
    $scope.inventories = respons.data;
    $scope.invent_data = $scope.inventories.response;
    console.log($scope.invent_data)
})
$http({
    method : "POST",
    url : ""
})

})




