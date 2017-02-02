$(document).ready(function(){
    $("h4").click(function(){
    	initMap();
        function initMap() {
         var location = {lat:28.595977, lng:77.325999};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Gym A',
        });
      }
    });
    $("h5").click(function(){
    	initMap();
        function initMap() {
        var location = {lat:19.0827699, lng:72.7411179};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Gym ABC',
        });
      }
    });
    $("h6").click(function(){
    	initMap();
        function initMap() {
        var location = {lat:12.9538477, lng:77.3507442};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Gym ABCD',
        });
      }
    });
});