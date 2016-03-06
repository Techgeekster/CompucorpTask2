angular.module('task2')
.directive('centerHorizontal', function ($document, $window, $timeout) {
    return function (scope, element, attrs) {
        $timeout(function() {
           $document.ready(function () {
                onResizeFunction = function() {
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
        }, 200);
    };
});