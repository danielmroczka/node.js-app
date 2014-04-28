var controllers = angular.module('controllers', []);

controllers.controller('itemController', function($scope, $http, $location) {
    $scope.item = {};

    $scope.listItems = function() {
        $http.get('api/items').success(function(data) {
            $scope.items = data;
        });
    };

    $scope.createItem = function() {
        console.log($scope.item);
        $http({
            method: 'POST',
            url: 'api/items',
            data: $scope.item
        }).success(function(data) {
            $location.path("/");
        });
    };
});

controllers.controller('mapController', function($scope, $http, $location) {
    $scope.map = {};
    $scope.map.location = {};

    $scope.listMaps = function() {
        $http.get('api/maps').success(function(data) {
            $scope.maps = data;
        });
    };

    $scope.createMap = function() {
        console.log($scope.map);
        $http({
            method: 'POST',
            url: 'api/maps',
            data: $scope.map
        }).success(function(data) {
            $location.path("/");
        });
    };
    
    $scope.removeMap = function(map) {
        $http({
            method: 'DELETE',
            url: 'api/maps/' + map._id
        }).success(function(data) {
            $location.path("/listMap");
        });
    };
    
    $scope.loadMap = function() {

        initialize();
    };

    function initialize() {
        var map;
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(50, 20),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

});

controllers.controller('loginController', function($scope) {
    $scope.login = {user: '', password: ''};
    $('#myModal').modal();

    $scope.login = function() {
        console.dir($scope);
    };

});