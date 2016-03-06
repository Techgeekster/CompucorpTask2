angular.module('task2')
.directive('section6', function($location, anchorSmoothScroll) {
    return {
        restrict: 'E',
        templateUrl: 'partials/home/section6.html',
        controller: function() {
            this.section6Heading = "Clients";
            
            this.getClientImages = function() {
                return clientImages;
            };
            this.getLeftArrow = function() {
                return leftArrow;
            };
            this.getRightArrow = function() {
                return rightArrow;
            };
            
            
            this.incrementClient = function() {
                clientImages.push(clientImages.shift());
            };
            
            this.decrementClient = function() {
                clientImages.unshift(clientImages.pop());
            };
            
            this.nextSection = 'section7';
            this.goToNextSection = function (){
              $location.hash(this.nextSection);
              // call $anchorScroll()
              anchorSmoothScroll.scrollTo(this.nextSection);
            };
        },
        controllerAs: 'section6Ctrl',
        css: 'css/partials/home/section6.css'
    };
});

var clientImages = [
    {
        name: "Client 1",
        url: "content/images/clients/client1.png"
    },
    {
        name: "Client 2",
        url: "content/images/clients/client2.png"    
    },
    {
        name: "Client 3",
        url: "content/images/clients/client3.png"
    }
];

var leftArrow = {
    name: "Left Arrow",
    url: "content/images/LeftArrow.png"
};

var rightArrow = {
    name: "Right Arrow",
    url: "content/images/RightArrow.png"
};