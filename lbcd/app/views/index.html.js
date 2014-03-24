require('app').controller('HomePageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = "HomePageController";

	$rootScope.homePage = true;
	$rootScope.portal = 'home';

}]);


// 'use strict';

// define(['app'], function(app) {

// 	return app.controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {

// 		$scope.controller = "HomeController";
// 		$rootScope.homePage = true;
// 		$rootScope.portal = 'home';
  
//   }]);
// });

// alert('test');