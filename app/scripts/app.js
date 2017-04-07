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
        .config(function ($urlRouterProvider, $stateProvider, $httpProvider) {

            $urlRouterProvider.otherwise('/search');

            $stateProvider
                .state('main', {
                    url: "/",
                    templateUrl: "views/main.html",
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
                .state('mosaics.id.annotation', {
                    url: '/annot/:ann',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('mosaics.id.resource', {
                    url: '/res/:res',
                    templateUrl: 'views/query.html',
                    //controller: 'MosaicsCtrl',
                    reloadOnSearch: false
                })
                .state('sparql', {
                    url: '/sparql',
                    templateUrl: 'views/sparql.html',
                    controller: 'SparqlCtrl'
                })
                .state('doc', {
                    url: '/doc',
                    templateUrl: 'views/doc.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'views/about.html'
                })

        })

        .run(function($rootScope, AppState) {

            $rootScope.catalogSources = [
                {   name: "Resource",
                    url: AppState.apiUrl + '/resources.json',
                    resultTransformer: function (response) {
                        var results = angular.fromJson(response)
                        return {
                            suggestions: $.map(results, function (result) {
                                return { value: result['dc:title'], data: result, mimetype: result.format && result.format.toLowerCase() };
                            })
                        };
                    },
                    setResult: function (suggestion, res) {
                        res.source = suggestion.data.source
                        if (suggestion.data.selector)
                            res.selector = {
                                type: suggestion.data.selector.type,
                                value: suggestion.data.selector.value
                            }
                    },
                    preprocessParams: function (params) {
                        //params['query'] = params['query']
                        params['expanded'] = true
                    }
                },
                {   name: "JRC CKAN",
                    url: FRAGVIZ.UTILS.proxyUrl + "?_uri=" + encodeURI("http://data.jrc.ec.europa.eu/api/action/resource_search"),
                    resultTransformer: function (response) {
                        var result = angular.fromJson(response)
                        return {
                            suggestions: $.map(result.result.results, function (result) {
                                return { value: result.name, data: result, mimetype: result.format && result.format.toLowerCase() };
                            })
                        };
                    },
                    setResult: function (suggestion, res) {
                        res.source = suggestion.data.url
                        res.format = FRAGVIZ.UTILS.MIME.getExtensionMimeType(suggestion.data.format) || suggestion.data.format
                    },
                    preprocessParams: function (params) {
                        params['query'] = "name:" + params['query']
                    }
                }
            ]
        })

})()


