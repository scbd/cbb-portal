<?php include 'header-inner.php'; ?>
			<div class="col-lg-12">
				<div class="map-container" id="view-container">
  <div id="map-canvas" class="collapse in"></div>
	<div class="col-lg-3 filters-container">
		<div class="panel-group">
			<div class="toggle-map">
				<div class="btn-group btn-group justified " data-toggle="buttons">
					<label id="map-view" class="btn btn-default active" data-toggle="collapse" data-target=".nav-collapse">
						<input type="radio" name="options" id="option1"> Map View
					</label>
					<label id="list-view" class="btn btn-default">
						<input type="radio" name="options" id="option2" > List View
					</label>
				</div>

				<div class="input-group input-group map-search">
					<input type="text" class="form-control input" placeholder="Search">
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">Filter by Continent</h4>
				</div>
				<div class="panel-body">
					<div class="checkbox">
						<label><input type="checkbox"> Africa</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Europe</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Asia</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> North America</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Latin America</label>
					</div>
				</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class="panel-heading">
					<h4 class="panel-title">Filter by Topic</h4>
				</div>
				<div class="panel-body mdg-img">
					<div class="checkbox">
						<label>
							<input type="checkbox"> Languages, linguistic diversity
						</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Material culture</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Social relations</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Models of subsistence</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Belief relations</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Knowledge, technology</label>
					</div>
					<div class="checkbox">
						<label><input type="checkbox"> Economic relations</label>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="list-view-container" class="container collapse">	
		<div class="list col-lg-8">
			<h2>Case Studies</h2>
			<ul class="media-list">
				<li class="media">
					<a class="pull-left" href="#">
						<img class="media-object" src="img/1.jpg" alt="Kagwene Gorilla Sanctuary">
					</a>
					<div class="media-body">
						<h4 class="media-heading">Kagwene Gorilla Sanctuary</h4>
						<p>The Kagwene Gorilla Sanctuary is currently being created at the eastern edge of the territory. Here, landscape mosaic would make it possible to consider different types of uses. It is currently being created at the eastern edge of the territory.</p> 
					</div>
					 <div class="pull-right read-more"><a href="#">more >></a></div>
				</li>
				<li class="media">
					<a class="pull-left" href="#">
						<img class="media-object" src="img/1.jpg" alt="Kagwene Gorilla Sanctuary">
					</a>
					<div class="media-body">
						<h4 class="media-heading">Kagwene Gorilla Sanctuary</h4>
						<p>The Kagwene Gorilla Sanctuary is currently being created at the eastern edge of the territory. Here, landscape mosaic would make it possible to consider different types of uses. It is currently being created at the eastern edge of the territory.</p>
					</div>
					 <div class="pull-right read-more"><a href="#">more >></a></div>
				</li>
				<li class="media">
					<a class="pull-left" href="#">
						<img class="media-object" src="img/1.jpg" alt="Kagwene Gorilla Sanctuary">
					</a>
					<div class="media-body">
						<h4 class="media-heading">Kagwene Gorilla Sanctuary</h4>
						<p>The Kagwene Gorilla Sanctuary is currently being created at the eastern edge of the territory. Here, landscape mosaic would make it possible to consider different types of uses. It is currently being created at the eastern edge of the territory.</p>							
					</div>
					 <div class="pull-right read-more"><a href="#">more >></a></div>
				</li>
				<li class="media">
					<a class="pull-left" href="#">
						<img class="media-object" src="img/1.jpg" alt="Kagwene Gorilla Sanctuary">
					</a>
					<div class="media-body">
						<h4 class="media-heading">Kagwene Gorilla Sanctuary</h4>
						<p>The Kagwene Gorilla Sanctuary is currently being created at the eastern edge of the territory. Here, landscape mosaic would make it possible to consider different types of uses. It is currently being created at the eastern edge of the territory.</p> 
					</div>
					 <div class="pull-right read-more"><a href="#">more >></a></div>
				</li>
				<li class="media">
					<a class="pull-left" href="#">
						<img class="media-object" src="img/1.jpg" alt="Kagwene Gorilla Sanctuary">
					</a>
					<div class="media-body">
						<h4 class="media-heading">Kagwene Gorilla Sanctuary</h4>
						<p>The Kagwene Gorilla Sanctuary is currently being created at the eastern edge of the territory. Here, landscape mosaic would make it possible to consider different types of uses. It is currently being created at the eastern edge of the territory.</p>					
					</div>
					 <div class="pull-right read-more"><a href="#">more >></a></div>
				</li>
			</ul>
			<div class="pagination-centered">
				<ul class="pagination">
					<li><a href="#">&laquo;</a></li>
					<li class="active"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">&raquo;</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
			</div>
		</div>
	</div>
</div>



		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBBgS3F6FVSrPF3knjAva2SFuBemhVr8yc&sensor=false">
    </script>
		<script type="text/javascript">
      function initialize() {
				var myLatlng = new google.maps.LatLng(5.3609557,-75.2921219);
        var mapOptions = {
          center: myLatlng,
          zoom: 2,
					minZoom:2,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
						
				var contentString = '<div id="content">'+
						'<div id="siteNotice">'+
						'</div>'+
						'<div id="bodyContent">'+
						'<h3 id="firstHeading" class="firstHeading"><a href="http://dev.glebemedia.ca/cbd/cultural/cs-detail.php">Zapara People</a></h3>'+
						'<p>Oral heritage and cultural manifestations of the Zápara people. The Zápara people of the Amazon rainforest are inhabitants of one of the most bio-diverse areas of the world. They have elaborated an oral culture that is particularly rich as regards their understanding of the natural environment. </p>'+
						'<p><a href="http://dev.glebemedia.ca/cbd/cultural/cs-detail.php">Learn More</a></p>'+
						'</div>'+
						'</div>';

				var infowindow = new google.maps.InfoWindow({
						content: contentString,
						maxWidth: 400
				});		
				var marker = new google.maps.Marker({
						position: myLatlng,
						map: map,
						title: 'ASPROINCA Project',
						show: true
				});
				//google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map,marker);
				//});
      }
      google.maps.event.addDomListener(window, 'load', initialize);
		
	
			$("#list-view").on("click", function() {
				$("#map-canvas").removeClass('in');
				$("#list-view-container").addClass('in');
			});
			$("#map-view").on("click", function() {
				$("#map-canvas").addClass('in');
				$("#list-view-container").removeClass('in');
			});
			$('.img-rounded').tooltip();
			$("body").tooltip({
				selector: "a[rel=tooltip]"
			});
    </script>
<?php include 'footer.php'; ?>
