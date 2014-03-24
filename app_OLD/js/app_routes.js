'use strict';

define(['app', 'authentication'], function(app) {

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/',                   { templateUrl: '/app/views/index.html',                 label: 'Home',           resolve: {user : resolveUser() } }).
            when('/about',              { templateUrl: '/app/views/about.html',                  label: 'About',          resolve: {user : resolveUser() } }).
            when('/resources',          { templateUrl: '/app/views/todo.html',                  label: 'Resources',      resolve: {user : resolveUser() } }).
            when('/countries',          { templateUrl: '/app/views/samples/index.html',         label: 'Countries',      resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/countries/:country', { templateUrl: '/app/views/samples/index-country.html', label: 'Country',        resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/oauth2/callback',    { templateUrl: '/app/views/oauth2/callback.html',                                resolve: {user : resolveUser(), dependencies: resolveDependencies() } }).
            when('/404',                { templateUrl: '/app/views/404.html',                   label: 'Page not found', resolve: {} }).
            otherwise({redirectTo: '/404'});

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
        function resolveDependencies() {

            return ['$q', '$route', function($q, $route) {

                var deferred = $q.defer();

                require([ $route.current.$$route.templateUrl ], function onResolved() {
                    deferred.resolve();
                });

                return deferred.promise;
            }];
        }
    }]);
});