var controllers = angular.module('controllers', []);

controllers.controller('controller', function($scope) {

    $scope.foo = function() {
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
