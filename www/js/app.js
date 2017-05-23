angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {

            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'r1'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'r2'
        })

    $urlRouterProvider.otherwise('/register');

});