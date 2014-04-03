define(['app', 'jquery'], function (app, $) {
    return app.controller('InnerPageController', ['$scope', '$rootScope', function ($scope, $rootScope) {
	        $scope.controller = "InnerPageController"; 
	        $rootScope.homePage = false;; 

	        // quick fix for http://www.cbd.int links    
	        $(document).ready(function() {
	            $('a[href^="http://www.cbd.int/"]').attr("target", "_self");
	        });

    }]);
});
