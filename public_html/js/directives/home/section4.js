angular.module('task2')
.directive('section4', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section4.html',
        controller: function() {
            this.section4Desc1 = "We love ";
            this.section4DescBrandColorText = "both";
            this.getSection4Image = function() {
                return section4Image;
            };
            
            this.nextSection = 'section5';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section4Ctrl',
        css: 'css/partials/home/section4.css'
    };
});

var section4Image = {
    name: "Section 4 Image",
    url: "content/images/section4Image.png"
};