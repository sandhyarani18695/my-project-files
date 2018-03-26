pro3.controller("vendorctrl",["$http","$scope","$rootScope","myfactory","$stateParams",
function($http,$scope,$rootScope,myfactory,$stateParams){
  $scope.$on('$viewContentLoaded', function(){
 $scope.postrequirement={};
  });

  $http({
      method : "GET",
      url:"https://www.w3schools.com/angular/customers.php"
    })
      .then(function customers(response){
      $scope.customer = response.data;
     $scope.customerdetails = $scope.customer.records;
       //console.log($scope.customerdetails);
  }) 

$http({
  method : "GET",
  url : "http://192.168.2.196:8099/RA/requirement/getreq"
}).then(function(response){
  $scope.getallreq=response.data;
  console.log($scope.getallreq);
})

$scope.experience = ["1-2 years","2-4 years","4-6 years","6-8 years","8-10 years","10+ more..."];
  $scope.currentLocation = ["Hyderabad","Bangalore","Chennai","Pune","Gurgon","Nagpur"];
  $scope.primaryskills = ["Java","JDBC","HTML5","CSS3","Javascript","AngularJS"];
		$scope.secondaryskills = ["Oracle","MYSQL","SQL Server","MongoDB","WebRTC","Web Socket"];

    $scope.edit = function(){
      myfactory.postareqGetById($stateParams.postId).then(function(data){
      $scope.postrequirement = data;
      console.log($scope.postrequirement.primarySkills);
      console.log($scope.postrequirement);
      $scope.postrequirement.primarySkills = $scope.postrequirement.primarySkills.split(',');
      $scope.postrequirement.secondarySkills = $scope.postrequirement.secondarySkills.split(',');
      console.log($scope.postrequirement.primarySkills);
      console.log($scope.postrequirement.secondarySkills);
      }),
      function(err){
        if(err){
          $scope.errorMessage = err;
        }else{
          $scope.errorMessage = err;
         }   
      }
}

//requirement for status in table

$scope.requirement=function(x){
		
  if(postrequirement.status == "Active"){
    postrequirement.status = "Inactive";
    $scope.requirement(postrequirement).then(function(data){
    $scope.aaaa = data;
    console.log($scope.aaaa);
    })
  }
  else{

    postrequirement.status = "Active";
    $scope.requirement(postrequirement).then(function(data){
    $scope.aaaa = data;
    })
  }
  }
  //pagination code
  $scope.maxSize = 5;     // Limit number for pagination display number.  
    $scope.totalCount = 0;  // Total number of items in all pages. initialize as a zero  
    $scope.pageIndex = 1;   // Current page number. First page is 1.-->  
    $scope.pageSizeSelected = 5; // Maximum number of items per page.  
  
    $scope.getEmployeeList = function () {  
 $http.get("http://192.168.2.196:8099/RA/requirement/getreqbyindex/1" + $scope.pageIndex).then(  
                       function (response) {  
                           $scope.getallreq = response.data.getallreq;  
                          //  $scope.totalCount = response.data.totalCount;  
                       },  
                       function (err) {  
                           var error = err;  
                       });  
    }  
    //Loading employees list on first time  
    $scope.getEmployeeList();  
  
    //This method is calling from pagination number  
    $scope.pageChanged = function () {  
        $scope.getEmployeeList();  
    };  
  
    //This method is calling from dropDown  
    // $scope.changePageSize = function () {  
    //     $scope.pageIndex = 1;  
    //     $scope.getEmployeeList();  
    // }
}])

