var controllers = angular.module('controllers', []);

controllers.controller('controller', function ($scope) {

    $scope.foo = function () {
        console.log('Hello!');
    }
    /*
     $scope.books = service.getBooks()
     .success(function(data) {
     $scope.books = data.books;
     })
     .error(function(data, status) {
     console.error('Error' + status);
     });
     */
    $scope.hello = 'Hello!';
});

controllers.controller('listController', function ($scope, $http) {
    $http.get('api/items').success(function (data) {
        $scope.items = data;
    });
});

controllers.controller('addController', function ($scope, $http) {
    $scope.item = {};
    $scope.createItem = function () {
        console.log($scope.item)
        $http({
            method: 'POST',
            url: 'api/items',
            data: $scope.item
        }).success(function (data) {
                console.log('post - ok');
            });
    }
});
