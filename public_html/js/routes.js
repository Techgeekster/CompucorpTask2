//Routes
angular.module('task2')
.config(function($routeProvider) {
     $routeProvider.
     when('/home', {
         templateUrl: 'partials/home/home.html',
         name: "Home",
         controller: 'HomeController',
         controllerAs: "homeCtrl",
         css: 'css/partials/home/home.css'
     }).
     otherwise({
       redirectTo: '/home'
     });
});