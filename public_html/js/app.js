angular.module('task2', ['ngRoute', 'ngResource', 'door3.css'])
.config(function($cssProvider) { 
        angular.extend($cssProvider.defaults, { 
            persist: true, 
            preload: true, 
            bustCache: true 
        }); 
});