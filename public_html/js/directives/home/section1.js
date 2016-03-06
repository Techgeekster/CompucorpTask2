angular.module('task2')
.directive('section1', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section1.html',
        controller: function() {
            this.getBrandLogo = function() {
                return brandLogoImage;
            };
            this.brandName = "Geek Label";

            this.section1Desc = "A team of self confessed geeks who are all about great digital design";
            
            this.nextSection = 'section2';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section1Ctrl',
        css: 'css/partials/home/section1.css'
    };
});

var brandLogoImage = {
    name: 'eyeglasses logo',
    url: 'content/images/eyeglassesLogo.png'
};