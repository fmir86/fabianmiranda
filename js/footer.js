/*** GOOGLE MAP ****/

function initialize() {
	var mapCanvas = document.getElementById('map_canvas');
	
	var mapOptions = {
		center: new google.maps.LatLng(9.992738, -84.130192),
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	
	var map = new google.maps.Map(mapCanvas, mapOptions)
}

google.maps.event.addDomListener(window, 'load', initialize);

/*** PLACEHOLDER FALLBACK ***/

function supports_input_placeholder(){
	var i = document.createElement('input');
	return 'placeholder' in i;
}

if(!supports_input_placeholder()) {
	var fields = document.getElementsByTagName('INPUT');
	for(var i=0; i < fields.length; i++) {
  		if(fields[i].hasAttribute('placeholder')) {
			fields[i].defaultValue = fields[i].getAttribute('placeholder');
			fields[i].onfocus = function() { if(this.value == this.defaultValue) this.value = ''; }
			fields[i].onblur = function() { if(this.value == '') this.value = this.defaultValue; }
  		}
	}
}