function initMap() {
    // The location of Uluru
    const uluru = { lat: 41.88644692839364, lng: -71.53915781541838};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 1000,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  function open_form(){

  }
  