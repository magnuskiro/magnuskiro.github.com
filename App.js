var config = function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/about.html'
        })
        .when('/projects', {
            templateUrl: 'view/projects.html'
        })
        .when('/web-presence', {
            templateUrl: 'view/webPlaces.html'
        })
        .when('/attest', {
            templateUrl: 'modules/attest/attest.html'
        })
        .otherwise({redirectTo : '/'})
    ;
};

var App = angular.module('App',['ngRoute']).config(config);
