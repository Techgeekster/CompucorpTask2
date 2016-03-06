angular.module('task2')
.controller('mapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(51.525946, -0.073650),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(51.524273, -0.073897),
        icon: googleMapIcon,
        title: "Geek Label"
    });
    marker.content = '<div class="infoWindowContent">' +
            "4th Floor<br>" +
            "27 - 33 Bethnal Green Road<br>" +
            "Shoreditch<br>" +
            "London<br>" + 
            "E1 6LA<br>" +
            "</div>";

    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
    });

    //makes the window open on load
    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
    infoWindow.open($scope.map, marker);

    $scope.markers.push(marker);
});

var googleMapIcon = {
    name: "Geek Label Icon",
    url: "content/images/googleMapsIcon.png"
};