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
        .module('mosaicsAppApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'mosaicsControllers',
            'mosaicsServices',
            'ui.codemirror',
            'ui.bootstrap',
            'satellizer',
            'ui.router',
        ])
        .config(function ($urlRouterProvider, $authProvider, $stateProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('main', {
                    url: "/",
                    template: "<div></div>",
                })
                .state('mosaics', {
                    url: '/mosaics',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('mosaics.query', {
                    url: '/search/:query',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('mosaics.all', {
                    url: '',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('mosaics.id', {
                    url: '/:id',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('mosaics.id.resource', {
                    url: '/:res',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('sparql', {
                    url: '/sparql',
                    templateUrl: 'views/sparql.html',
                    controller: 'SparqlCtrl'
                })


            //TODO $authProvider.google
        })

        .factory('AppState', function() {
            return {
                apiUrl : '/api'
            };
        })

        .run(function($auth, $rootScope, Authentication) {
            $rootScope.auth = $auth
            $rootScope.$watch("auth.isAuthenticated()", function(isAuthenticated) {
                $rootScope.currentUser = isAuthenticated && Authentication.get()
            })

            // make keys iterator available for use in angular templates (ng-show, ng-if, ...)
            $rootScope.keys = Object.keys
        })


    app.directive("topMenu", function() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: "snippets/topmenu.html"
        };
    });

    /*
     This directive allows us to pass a function in on an enter key to do what we want.
     From http://ericsaupe.com/angularjs-detect-enter-key-ngenter/
     */
    app.directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });

    app.directive('editable', function () {
        return {
            restrict: 'AE',
            replace: false,
            /*terminal: true,
            priority: 1000,*/
            scope: {
                ngModel: "="
            },
            template:"<span class='editable' ng-init='edit=false' ng-dblclick='edit = !edit' ng-class='{edited: edit}'><input ng-blur='edit=false' ng-disabled='!edit' size='{{ngModel && (ngModel.length + 3)}}' ng-enter='edit=false' ng-model='ngModel'></span>",

            link: function link(scope, element, attrs) {

                scope.$watch("edit", function(value) {
                    var input = element.children().children()[0]
                    if (value) input.focus()
                    else input.blur()
                })
            }

        };
    })

    window.FRAGVIZ.styles = {
        include : "http://localhost:9000/libs/fragviz_include/styles/include.css",
        sausage: "http://localhost:9000/libs/fragviz_include/scripts/extlibs/sausage/sausage.css"
    };

    PDFJS.workerSrc  = 'libs/pdfjs-dist/build/pdf.worker.js'
    FRAGVIZ.UTILS.proxyUrl = '/proxy'
    OpenLayers.ImgPath = "libs/openlayers2/img/"
    OpenLayers.ThemePath = "libs/openlayers2/theme/default"

})()


