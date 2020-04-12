(function(){
            'use strict;' // What does that do?

            angular.module('scrumboard.demo', [])
                .controller('ScrumboardController', // next line is dependencies
                    ['$scope', '$http', ScrumboardController]);

            function ScrumboardController($scope, $http) {

                $scope.add = function (list, title){
                    var card = {
                        list: list.id,
                        title: title
                    };
                    $http.post('/scrumboard/cards/', card).then(function (response) {
                        list.cards.push(response.data);
                    },
                    function(){
                        alert("Could not create card");
                    });
                };

                $scope.login = function() {
                    console.log("login function has been invoked");
                    alert("Are you sure you want to log in?");
                    $http.post('/auth_api/login',
                        {username: 'omri', password: 'djangular1234'});
                };

                $scope.data = [];
                // This is asyncronos call, i.e. not waiting for a response.
                // This results in a promiss object hence the use of `then`
                $http.get('/scrumboard/lists/').then(function (response) {
                    $scope.data = response.data; // should this be $scope.list instead ?
                }, function(response) {
                    console.log(response);
                });
            }
        }());