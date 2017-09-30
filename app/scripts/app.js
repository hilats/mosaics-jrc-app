'use strict';

/**
 * @ngdoc overview
 * @name mosaicsAppApp
 * @description
 * # mosaicsAppApp
 *
 * Main module of the application.
 */

(function() {

    var app = angular
        .module('mosaicsJrcApp', [
            'mosaicsApp'
        ])
        .config(['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/search');

            $stateProvider
                .state('main', {
                    url: "/",
                    templateUrl: "views/main.html"
                })

        }])

})()


