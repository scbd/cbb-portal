require("app").directive("viewAbsPermit", [function () {

	return {
		restrict   : "EAC",
		templateUrl: "/app/views/forms/view/view-abs-permit.directive.html",
		replace    : true,
		transclude : false,
		scope: {
			document: "=ngModel",
			documentInfo: "=documentInfo",
			locale  : "=",
			target  : "@linkTarget",
			allowDrafts: "@"
		},
		link : function ($scope, $element, $attr)
		{
			$scope.contacts = undefined;
			$scope.showPdf = $attr.showPdf === undefined || $attr.showPdf != "false";
		},
		controller: ["$scope", "IStorage", "authHttp", "$q","underscore", function ($scope, storage, $http, $q, _)
		{

			$scope.gisMapLayers = null;
			$scope.gisMapCenter = null;

			//==================================
			//
			//==================================
			$scope.$watch("document.gisMapCenter", function (gisMapCenter) {
				$scope.gisMapCenter = angular.fromJson(angular.toJson(gisMapCenter));
			});

			//==================================
			//
			//==================================
			$scope.$watch("document.gisFiles", function (gisFiles) {
				var qLinks = gisFiles || [];
				var qGis = _.map(qLinks, function(link) {

					/* global L: true */ // JSHint for leaflet

					return $http.get(link.url).then(function(res) {
						return L.geoJson(res.data);
					});
				});

				$q.all(qGis).then(function (layers) {
					$scope.gisMapLayers = layers;
				});
			});

			//====================
			//
			//====================
			$scope.$watch("document.authority", function (_new) {
				$scope.authority = undefined;

				if (_new) {
					$scope.authority = angular.fromJson(angular.toJson(_new));
					$scope.loadReferences($scope.authority);
				}
			});

			//====================
			//
			//====================
			$scope.$watch("document.amendedPermits", function (_new) {
				$scope.amendedPermits = undefined;

				if (_new) {
					$scope.amendedPermits = angular.fromJson(angular.toJson(_new));
					$scope.loadReferences($scope.amendedPermits);
				}
			});

			//====================
			//
			//====================
			$scope.loadReferences = function(targets) {

				if (targets && !angular.isArray(targets))
					targets = [targets];

				angular.forEach(targets, function(ref){

					storage.documents.get(ref.identifier, { cache : true})
						.success(function(data){
							ref.document = data;
						})
						.error(function(error, code){
							if (code == 404 && $scope.allowDrafts == "true") {

								storage.drafts.get(ref.identifier, { cache : true})
									.success(function(data){
										ref.document = data;
									})
									.error(function(){
										ref.document  = undefined;
										ref.error     = error;
										ref.errorCode = code;
									});
							}

							ref.document  = undefined;
							ref.error     = error;
							ref.errorCode = code;

						});
				});
			};
		}]
	};
}]);
