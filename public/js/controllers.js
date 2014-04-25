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