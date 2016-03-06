angular.module('task2')
.directive('applyParentheight', function ($document, $window, $timeout) {
    return function (scope, element, attrs) {
        $timeout(function() {
           $document.ready(function () {
                onResizeFunction = function() {
                    var parentElement = element[0].parentElement;
                    element.css('height', parentElement.offsetHeight + 'px');
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