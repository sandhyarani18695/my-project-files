pro3.factory("myfactory",function($http,$q){

return{
    allocated:function(alloc){
        var deffered = $q.defer();
        $http.post('http://192.168.2.184:5000/allocate',alloc).success(function(response){
            deffered.resolve(response);
        }).error(function(err){
            deffered.reject(err);
        })
        return deffered.promise;
    },
    getdata:function(getd){
        var deffered = $q.defer();
        $http.post('http://192.168.2.196:8099/RA/requirement/addreq',getd).success(function(response){
            deffered.resolve(response);
        }).error(function(err){
            deffered.reject(err);
        })
        return deffered.promise;
    },
     postareqGetById: function(id){
	        	var deferred = $q.defer();
	        	$http.get("http:// 192.168.2.196:8099/RA/requirement/getreqbyid/" + id).success(function(response){
	        		deferred.resolve(response);
	        	}).error(function(err){
	        		deferred.reject(err);
	        	})
	        	return deferred.promise;
            }
   
            }

 })