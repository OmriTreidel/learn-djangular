(function () {

    'use strict'

    angular.module('scrumboard.demo')
        .directive('scrumboardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: '/static/html/card.html',
            restrict: 'E', // means HTML element. it can be 'A' which is for attribute
            controller: ['$scope', '$http', function ($scope, $http) {
                var url = '/scrumboard/cards/' + $scope.card.id + '/';
                $scope.update = function () {
                    $http.put(
                        url,
                        $scope.card
                    );
                };

                $scope.delete = function () {
                    $http.delete(url).then(function () {
                        var cards = $scope.list.cards;
                        cards.splice(
                            cards.indexOf($scope.card),
                            1 // number of items to be removed
                        )
                    })
                }

                // wait for 500 millis without typing before updating the model
                // This ensures there is no http request for every key stroke
                $scope.modelOptions = {
                  debounce: 500 // milli seconds
                };


            }]
        };
    }
})();