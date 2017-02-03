function initMap() {
        var location = {lat:51.5, lng:-0.2};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map,
          // address: "15 avenue des champs Elysées 75008 Paris",
          // title: 'Excellence', 
          // icon: 'http://www.tiloweb.com/wp-content/uploads/2012/04/logo-e1335400790554.png', // Icon UR
        });
      }
