pro3.controller("customerctrl",function($scope,$http,myFactory){
myFactory.get("http://192.168.2.184:5000/booklist").then(function(data){
    $scope.books=data.response;
    console.log($scope.books)
})
$scope.updatebooks = function(){
myFactory.get('http://192.168.2.184:5000/book?book_id=',id).then(function(data){
    $scope.bookslist = data.response;
    console.log($scope.bookslist)
})
}

$scope.addNew = function(){
    //console.log($scope.books);
    debugger;
myFactory.post("http://192.168.2.184:5000/book",JSON.stringify($scope.books)).then(function(data){
    $scope.addbook = data;
    console.log($scope.addbook)
})
document.addbookform.reset();
}
$http({
    method: "GET",
    url: "http://192.168.2.184:5000/department" 
}).then(function inventSuccess(respons) {
    $scope.inventories = respons.data;
    $scope.invent_data = $scope.inventories.response;
    console.log($scope.invent_data)
})
// $scope.addNew=function(){
//     console.log($scope.ticketDetails);
//     myservice.tickets(JSON.stringify($scope.ticketDetails)).then(function(data){
//         $scope.details = data;
//         console.log($scope.details);
//     },function(err){
//         if(err){
//             $scope.errorMessage = err;
//         }else{
//             $scope.errorMessage = err;
//         }
//     });
//  document.ticketissue.reset();
// }
// $http({
//     method : "GET",
//     url : "http://192.168.2.184:5000/allocate?allocation_id="
// }).then(function(resp1){
// $scope.allocate2 =resp1.data;
// $scope.allocate_id = $scope.allocate2.response;
// console.log($scope.allocate_id) 
// })

})
