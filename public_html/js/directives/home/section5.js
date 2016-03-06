angular.module('task2')
.directive('section5', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section5.html',
        controller: function() {
            this.section5Heading = "Services";
            this.getServiceImages = function() {
                return [service1Image, service2Image, service3Image, service4Image];
            };
            
            this.nextSection = 'section6';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section5Ctrl',
        css: 'css/partials/home/section5.css'
    };
});

var service1Image = {
    name: "Service 1",
    url: "content/images/services/service1.png",
    description: "Web Development"
};

var service2Image = {
    name: "Service 2",
    url: "content/images/services/service2.png",
    description: "Design"
};

var service3Image = {
    name: "Service 3",
    url: "content/images/services/service3.png",
    description: "Branding"
};

var service4Image = {
    name: "Service 4",
    url: "content/images/services/service4.png",
    description: "UX Research"
};