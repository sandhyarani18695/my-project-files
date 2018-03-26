pro3.factory("myFactory",function($q,$http){
 var factory = {};
 factory.get = function(url){
     var deffered = $q.defer();
     var request = {
      method:"GET",
      url : url
      }
      $http(request).success(function(response){
        if(request.status == "failed"){
         alert("somthing went wrong")
         $state.go("login");
        }
        deffered.resolve(response);
      }).error(function(response){
        deffered.reject(response);
      })
     return deffered.promise;
 }
 factory.post = function(url,addbook){
     var deffered = $q.defer();
     var request = {
         method : "POST",
         data : addbook,
         url : url,
         header : {
          'Content-Type' : 'application/json'
         }
     }
     $http(request).success(function(response){
      if(request.status == 'failed'){
          alert("data undefined");
      }
      deffered.resolve(response);
     }).error(function(response){
         deffered.reject(response);
     })
     return deffered.promise;
 }
 return factory;
})