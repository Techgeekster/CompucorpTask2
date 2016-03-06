angular.module('task2')
.controller('HomeController', function() {
    this.getWhiteArrow = function() {
        return whiteArrow;
    };
    this.getPinkArrow = function() {
        return pinkArrow;
    };
    this.getBlackArrow = function() {
        return blackArrow;
    };
    this.getSpinner = function() {
        return spinner;
    };
});

var whiteArrow = {
    name: 'White Arrow',
    url: 'content/images/WhiteArrow.png'
};

var pinkArrow = {
    name: 'Pink Arrow',
    url: 'content/images/PinkArrow.png'
};

var blackArrow = {
    name: 'Black Arrow',
    url: 'content/images/BlackArrow.png'
};

var spinner = {
    name: 'Spinner',
    url: 'content/images/spinner.svg'
};