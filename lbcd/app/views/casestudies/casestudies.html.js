require('app').controller('CaseStudyController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	$scope.controller = "CaseStudyController";

	$rootScope.homePage = false;
	$rootScope.portal = 'casestudy';

}]);

'use strict';

define(['app'], function(app) {

	return app.controller('CaseStudyController', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$scope.controller = "CaseStudyController";
		$rootScope.homePage = false;
		$rootScope.portal = 'cs';
  
  }]);

	app.directive('caseStudies', ['$http', function($http) {
	    return {
	        restrict: 'EAC',
	        templateUrl: '/app/views/casestudies/casestudies.partial.html',
	        scope: {
	        },
	        controller: ["$scope", function ($scope) 
	        {
	            $http.get('/app/views/casestudies/casestudies.json').success(function (data) {
	                $scope.documents = data.response.docs;
	            });
	        }] 

    }}]);	 
});
