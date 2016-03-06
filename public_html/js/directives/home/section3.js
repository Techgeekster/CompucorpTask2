angular.module('task2')
.directive('section3', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section3.html',
        controller: function() {
            this.section3Desc1 = "Some agencies know how to ";
            this.section3DescBrandColorText = "build";
            this.section3Desc2 = " but can't do design";
            this.getSection3Image = function() {
                return section3Image;
            };
            
            this.nextSection = 'section4';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section3Ctrl',
        css: 'css/partials/home/section3.css'
    };
});

var section3Image = {
    name: "Section 3 Image",
    url: "content/images/section3Image.png"
};