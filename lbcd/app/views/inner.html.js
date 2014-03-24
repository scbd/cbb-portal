define(['app'], function (app) {
    return app.controller('InnerPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	        $scope.controller = "InnerPageController"; 
	        $rootScope.homePage = false;; 
    }]);
});
