(function () {
    'use strict'

    angular.module('scrumboard.demo').run(['$http', run]);

    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    };

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                temlateUrl: '/static/html/scrumboard.html',
                controler: 'ScrumboardController',
            })
            .when('/login', {
                templateUrl: 'static/html/login.html',
            })
            .otherwise('/');
    }
})();