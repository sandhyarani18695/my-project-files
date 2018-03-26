var pro3 = angular.module("mainApp",['ui.router']);

pro3.config(function($stateProvider, $urlRouterProvider){
     $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
    .state('dashboard',{
        url:"/dashboard",
        templateUrl : "views/home.html"
    })
    .state("dashboard.about",{
        url:"/about",
        templateUrl:"views/about.html",
        controller : "aboutCtrl"
    })
    .state("dashboard.vendor",{
        url:"/vendor",
        templateUrl:"views/vendor.html",
        controller:"vendorctrl"
    })
    .state("dashboard.customer",{
        url:"/customer",
        templateUrl:"views/customer.html",
        controller : "customerctrl"
    })
    .state("dashboard.contactus",{
        url:"/contactus",
        templateUrl:"views/contactus.html",
        controller : "contactctrl"
    })
    .state("login",{
        url:"/login",
        templateUrl:"views/login.html",
        controller : "loginctrl"
    })

    //admin module
    .state("admin",{
        url : "/admin",
        templateUrl : "views/admin/admin.html"
    })
    .state("admin.admindashboard",{
        url : "/admindashboard",
        templateUrl : "views/admin/admindashboard.html"
    })
    .state("admin.addvendor",{
        url : "/addvendor",
        templateUrl : "views/admin/addvendor.html"
    })
    .state("admin.addcustomer",{
       url  : "/addcustomer",
       templateUrl : "views/admin/addcustomer.html" 
    })
    .state("admin.customerlist",{
        url : "/customerlist",
        templateUrl : "views/admin/customerlist.html"
    })
    .state("admin.vendorlist",{
        url : "/vendorlist",
        templateUrl : "views/admin/vendorlist.html"
    })

    //customer module
    .state("customer",{
        url : "/customer",
        templateUrl : "views/customer/customer.html"
    })
    .state("customer.customerdashboard",{
        url : "/customerdashboard",
        templateUrl : "views/customer/customerdashboard.html",
        controller : "cdashctrl"
    })
    .state("customer.customerprofile",{
        url : "/customerprofile",
        templateUrl : "views/customer/customerprofile.html"
        
        
    })
    .state("customer.searchresource",{
        url : "/searchresource",
        templateUrl : "views/customer/searchresource.html"
    })
    .state("customer.post_a_req",{
        url : "/post_a_req",
        templateUrl : "views/customer/post_a_req.html"
    })

    //vendor module
    .state("vendor",{
        url : "/vendor",
        templateUrl : "views/vendor/vendor.html"
    })
    .state("vendor.vendordashboard",{
        url : "/vendordashboard",
        templateUrl : "views/vendor/vendordashboard.html",
        controller : "vendorctrl"
    })
    .state("vendor.vendorprofile",{
        url : "/vendorprofile",
        templateUrl : "views/vendor/vendorprofile.html",
        controller : "vendorctrl"
    })
    .state("vendor.searchrequirement",{
        url : "/searchrequirement",
        templateUrl : "views/vendor/searchrequirement.html"
    })
    .state("vendor.post_a_resource",{
        url : "/post_a_resource/:postId",
        templateUrl : "views/vendor/post_a_resource.html",
        controller : "vendorctrl"
    })
})
