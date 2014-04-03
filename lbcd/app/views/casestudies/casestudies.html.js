'use strict';

define(['app', 'async!http://maps.google.com/maps/api/js?v=3.exp&sensor=false'], function(app, google) {

    //==================================================
    //
    //
    //==================================================
	app.controller('CaseStudyController', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$scope.controller = "CaseStudyController";
		$rootScope.homePage = false;
		$rootScope.portal = 'cs';
  
  	}]);
	

    //==================================================
    //
    //
    //==================================================
    app.directive('caseStudiesList', ['$http', function($http) {
        return {
            restrict: 'EAC',
            templateUrl: '/lbcd/app/views/casestudies/casestudies.partial.html',
            scope: {
            },
            controller: ["$scope", function ($scope) 
            {
                $http.get('/lbcd/app/views/casestudies/casestudies.json').success(function (data) {
                    $scope.documents = data.response.docs;
                });
            }] 

    }}]);

    //==================================================
    //
    //
    //==================================================
    app.directive('caseStudiesMap', ['$window', '$http', function($window, $http) {
        var map, marker, myLatlng, infowindow, contentString,
          currentFeatures = null,
          infowindow,
          gmapsListeners = [],
          geojsonCache,
          defaultStyle = {
            strokeColor: null,
            strokeOpacity: 0.75,
            strokeWeight: 2,
            fillColor: null,
            fillOpacity: 0.25
          };


        function init(rootEl) {
          infowindow = new $window.google.maps.InfoWindow();

          map = new $window.google.maps.Map(rootEl, {
            zoom: 2,
            center: new $window.google.maps.LatLng(13.6036603, -101.313101),
            mapTypeId: $window.google.maps.MapTypeId.TERRAIN,

          });
            myLatlng = new $window.google.maps.LatLng(5.3609557,-75.2921219);
            marker = new $window.google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'ASPROINCA Project',
              show: true
              });

             contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<div id="bodyContent">'+
                '<h3 id="firstHeading" class="firstHeading"><a href="http://dev.glebemedia.ca/cbd/cultural/cs-detail.php">Zapara People</a></h3>'+
                '<p>Oral heritage and cultural manifestations of the Zápara people. The Zápara people of the Amazon rainforest are inhabitants of one of the most bio-diverse areas of the world. They have elaborated an oral culture that is particularly rich as regards their understanding of the natural environment. </p>'+
                '<p><a href="http://dev.glebemedia.ca/cbd/cultural/cs-detail.php">Learn More</a></p>'+
                '</div>'+
                '</div>';

             infowindow = new $window.google.maps.InfoWindow({
              content: contentString,
              maxWidth: 400
              }); 

              $window.google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
              });

        }

        // function setInfoWindow(event) {
        //   var content = '<div id="infoBox">',
        //     key,
        //     CBDbaseUrl = 'https://chm.cbd.int/database/record?documentID=';

        //   event.feature.forEachProperty(function(propVal, propName) {
        //     if (propName == 'NAME') {
        //       content += propName + ': ' + '<strong>' + propVal + '</strong><br />';
        //     } else if (propName == 'KEY') {
        //       key = propVal;
        //     } else {
        //       content += propName + ': ' + propVal + '<br /><br />';
        //     }
        //   });

        //   content += '<a class="pull-right" target="_blank" href="' + CBDbaseUrl + key + '">Details »</a>';
        //   content += '</div>';
        //   infowindow.setContent(content);
        //   infowindow.setPosition(event.latLng);
        //   infowindow.open(map);
        // }

        function cleanupListeners(e) {
          $window.google.maps.event.removeListener(listener);
        }

        // function clearMap(map) {
        //   if (infowindow.getMap()) infowindow.close();
        //   map.data.forEach(function(feature) {
        //     map.data.remove(feature);
        //   });
        // }

        //var listener;

        // function displayRegion(regionData, regionName) {
        //   map.data.addGeoJson(regionData);
        //   listener = map.data.addListener('click', setInfoWindow);
        // }

        //function applyStyles() {
        //   map.data.setStyle(function(feature) {
        //     return angular.extend({}, defaultStyle, feature.getProperty('style'));
        //   });
        // }

        // function updateSelectedRegion(regionName) {
        //   if (!geojsonCache) return;
        //   clearMap(map);
        //   if (!regionName) {
        //     angular.forEach(geojsonCache, function(regionData, regionName) {
        //       displayRegion(regionData, regionName);
        //     });
        //     applyStyles();
        //     return;
        //   }
        //   displayRegion(geojsonCache[regionName], regionName);
        //   applyStyles();
        // }

        return {
          restrict: 'EAC',
          template: '<div id="map-canvas" class="collapse in"></div>',
          replace: true,
          scope: {
            regions: '=',
            selectedRegion: '=',
            documents: '='
          },
          link: function(scope, element, attrs) {
            init(element.get(0));

            
           // scope.$watch('selectedRegion', updateSelectedRegion);

            // scope.$watch('regions', function(regions) {
            //   if (!regions) return;
            //   geojsonCache = regions;
            //   updateSelectedRegion(null);
            // });

            scope.$on('$destroy', cleanupListeners);
          }
        };
	}]);    

	return false;
});


