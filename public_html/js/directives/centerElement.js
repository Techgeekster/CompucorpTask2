angular.module('task2')
.directive('centerElement', function ($document, $timeout, $window) {
    return function (scope, element, attrs) {
        $timeout(function() {
           $document.ready(function () {
                var spinners = document.getElementsByClassName('spinner');
                for (var index = 0; index < spinners.length; index++)
                {
                    spinners[index].style.display = "none";
                }
               
                element.css('display', 'block');
                
                onResizeFunction = function() {
                    element.css('margin-top', '-' + (element[0].offsetHeight / 2) + 'px');
                    element.css('margin-left', '-' + (element[0].offsetWidth / 2) + 'px');
                };

                  // Call to the function when the page is first loaded
                onResizeFunction();

                window.angular.element($window).on('resize', onResizeFunction);

                cleanUp = function () {
                    window.angular.element($window).off('resize');
                };

                scope.$on('$destroy', cleanUp);
            }); 
        }, 100);
    };
});