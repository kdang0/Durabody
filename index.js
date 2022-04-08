
var vis="hidden";
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

  function openform(){
    
    
    var x = document.getElementById("Contact-1");
    console.log(vis);
    if(vis==="hidden"){
    document.querySelectorAll(".Contact-1").forEach(x => x.style.visibility = "visible");
    vis="visible";
    }

    else{
      document.querySelectorAll(".Contact-1").forEach(x => x.style.visibility = "hidden");
      vis="hidden";

    }
   
  }

  function btnClick(){
    var btn=document.getElementsByClassName("btnClickinq")
    btn.onclick = function(event) {
      console.log(event);
      console.log("lund");
      openform();
    }
  }
  