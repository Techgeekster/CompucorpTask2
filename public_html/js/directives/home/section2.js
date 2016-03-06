angular.module('task2')
.directive('section2', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section2.html',
        controller: function() {
            this.section2Desc1 = "Some agencies love ";
            this.section2DescBrandColorText = "design";
            this.section2Desc2 = ", but don't know how to build";
            this.getSection2Image = function() {
                return section2Image;
            };
            
            this.nextSection = 'section3';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section2Ctrl',
        css: 'css/partials/home/section2.css'
    };
});

var section2Image = {
    name: "Section 2 Image",
    url: "content/images/section2Image.png"
};