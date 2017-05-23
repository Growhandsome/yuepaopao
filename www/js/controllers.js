angular.module('starter.controllers', [])
    .controller('r1', function($scope, $state) {
        $scope.login = function() {
            $state.go('login');
        }
    })
    .controller('r2', function($scope, $state) {
        $scope.back = function() {
            $state.go('register')
        }
    })