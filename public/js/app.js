var app = angular.module('app',
    ['ngRoute',
        'ngTouch',
        'ngAnimate',
        'controllers',
        'service'
    ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/empty.html',
            controller: 'itemController'
        }).
        when('/add', {
            templateUrl: 'partials/add.html',
            controller: 'itemController'
        }).
        when('/list', {
            templateUrl: 'partials/list.html',
            controller: 'itemController'
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        }).
        when('/addMap', {
            templateUrl: 'partials/addMap.html',
            controller: 'mapController'
        }).
        when('/listMap', {
            templateUrl: 'partials/listMap.html',
            controller: 'mapController'
        }).
        otherwise({
            redirectTo: '/'
        });

}
]);

/*app.config(function ($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/

app.service('service', function ($http) {
    return {
        getBooks: function () {
            return $http({
                headers: {'Access-Control-Request-Headers': 'accept, origin', 'Access-Control-Allow-Origin': '*'},
                url: 'http://restful.kayleigh.cloudbees.net/rest/books'
                //url: 'http://localhost:8080/restful-reference/rest/books'
            });
        }
    };
});

