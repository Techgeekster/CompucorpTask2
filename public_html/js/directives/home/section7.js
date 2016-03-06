angular.module('task2')
.directive('section7', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section7.html',
        controller: function() {
            this.section7Heading = "How to find us";
            
            this.nextSection = 'section8';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section7Ctrl',
        css: 'css/partials/home/section7.css'
    };
});