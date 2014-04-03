'use strict';

define(['app', 'authentication', 'services', 'filters', 'storage', 'workflows'], function(app) {

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/lbcd/',                   { templateUrl: '/lbcd/app/views/index.html',                 label: 'Home',           resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/lbcd/step1',              { templateUrl: '/lbcd/app/views/step1.html',                 label: 'Step 1',         resolve: {user : resolveUser() } }).
            when('/lbcd/step2',              { templateUrl: '/lbcd/app/views/step2.html',                 label: 'Step 2',         resolve: {user : resolveUser() } }).
            when('/lbcd/legal',              { templateUrl: '/lbcd/app/views/legal.html',                 label: 'Legal',          resolve: {user : resolveUser() } }).
            when('/lbcd/about',              { templateUrl: '/lbcd/app/views/about.html',                 label: 'About',          resolve: {user : resolveUser() } }).
            when('/lbcd/partners',           { templateUrl: '/lbcd/app/views/partners.html',              label: 'Partners',       resolve: {user : resolveUser() } }).
            when('/lbcd/case-studies',       { templateUrl: '/lbcd/app/views/find.html',                  label: 'Case Studies', resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/lbcd/resources',          { templateUrl: '/lbcd/app/views/resources.html',             label: 'Resources',      resolve: {user : resolveUser() } }).
            when('/lbcd/news',               { templateUrl: '/lbcd/app/views/news.html',                  label: 'News',           resolve: {user : resolveUser() } }).
            when('/lbcd/events',             { templateUrl: '/lbcd/app/views/events.html',                label: 'Events',         resolve: {user : resolveUser() } }).
            when('/lbcd/find',               { templateUrl: '/lbcd/app/views/find.html',                  label: 'Search',         resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).            
            when('/lbcd/countries',          { templateUrl: '/lbcd/app/views/samples/index.html',         label: 'Countries',      resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/lbcd/countries/:country', { templateUrl: '/lbcd/app/views/samples/index-country.html', label: 'Country',        resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/lbcd/oauth2/callback',    { templateUrl: '/lbcd/app/views/oauth2/callback.html',                                resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/lbcd/404',                { templateUrl: '/lbcd/app/views/404.html',                   label: 'Page not found', resolve: {} }).
            otherwise({redirectTo: '/lbcd/404'});

        //==================================================
        //
        //
        //==================================================
        function resolveUser() {

            return ['$rootScope', 'authentication', function($rootScope, authentication) {
                return authentication.getUser().then(function (user) {
                    $rootScope.user = user;
                    return user;
                });
            }];
        }

        //==================================================
        //
        //
        //==================================================
        function resolveDependencies(dependencies) {
            return ['$q', '$route', function($q, $route) {

                var deferred = $q.defer();

                require([$route.current.$$route.templateUrl + ".js"], function() {
                    deferred.resolve();
                });

                return deferred.promise;
            }];
        }
    }]);
});