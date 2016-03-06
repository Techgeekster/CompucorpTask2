angular.module('task2')
.directive('section8', function() {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section8.html',
        controller: function() {
            this.section8Heading = "Contact";
            
            this.name = "";
            this.email = "";
            this.message = "";
            this.sendContactRequest = function() {
                console.log("Name: " + this.name);
                console.log("Email: " + this.email);
                console.log("Message: " + this.message);
            };
            
            this.section8Desc = "Or phone on: 01923 220121";
        },
        controllerAs: 'section8Ctrl',
        css: 'css/partials/home/section8.css'
    };
});