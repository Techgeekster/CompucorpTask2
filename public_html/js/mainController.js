angular.module('task2')
.controller('MainController', ['$route', function($route) 
    {
       this.$route = $route; 
       this.title = '';
}]);