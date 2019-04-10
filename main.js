var hamburgerIcon = document.getElementsByClassName("hamburgerIcon")[0];
var onSmallMainUl = document.getElementsByClassName("onSmallMainUl")[0];

hamburgerIcon.addEventListener("click", showFn);

function showFn(){
	if( onSmallMainUl.style.display == "block" ){
		onSmallMainUl.style.display = "none";
	}else{
		onSmallMainUl.style.display = "block";
	}
	
}

// google-map

function initMap() {
	// Create a map object and specify the DOM element for display.
	var myLatLng = {lat: 36.888233, lng: 26.664017};
    var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 16
     });
    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Thunder Solution'
	});
}