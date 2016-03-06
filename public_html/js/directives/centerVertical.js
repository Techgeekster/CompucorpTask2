angular.module('task2')
.directive('centerVertical', function ($document, $timeout, $window) {
    return function (scope, element, attrs) {
        $document.ready(function () {
            $timeout(function() {
                var spinners = document.getElementsByClassName('spinnerVertical');
                for (var index = 0; index < spinners.length; index++)
                {
                    spinners[index].style.display = "none";
                }
               
                element.css('display', 'block');
                onResizeFunction = function() {
                    element.css('margin-top', '-' + (element[0].offsetHeight / 2) + 'px');
                };

                  // Call to the function when the page is first loaded
                onResizeFunction();

                window.angular.element($window).on('resize', onResizeFunction);

                cleanUp = function () {
                    window.angular.element($window).off('resize');
                };

                scope.$on('$destroy', cleanUp);
            }, 100);
        });
    };
});