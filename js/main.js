var tl = new TimelineLite();
var add = document.addEventListener ? 'addEventListener' : 'attachEvent';
var remove = document.removeEventListener ? 'removeEventListener' : 'detachEvent';

var mobMenuVisible = false;

var scaleAnimationArray = document.getElementsByClassName("scaleAnimation");

function $(elem){
	if(elem.substr(0,1) == "#"){
		return document.getElementById( elem.substr(1, elem.length) );
	}else if(elem.substr(0,1) == "."){
		return document.getElementsByClassName( elem.substr(1, elem.length) );
	}else{
		return document.getElementsByTagName(elem);
	}
}

/*** FIXED BACKGROUNDS RESETED IN MOBILE ***/

if(mobilecheck()) TweenLite.set([$("#professionalProfile"), $("#portfolio")], {backgroundPosition:"0% 0%", backgroundAttachment:"scroll"});


/******* Info Box text clamping *********/

$clamp(document.getElementById("infoBox1"), {clamp: 4});
$clamp(document.getElementById("infoBox2"), {clamp: 4});
$clamp(document.getElementById("infoBox3"), {clamp: 4});

$clamp(document.getElementById("profileTextBox"), {clamp: 6});
$clamp(document.getElementById("technologiesTextBox"), {clamp: 6});

/*** GOOGLE MAP ****/

function initialize() {
	var mapCanvas = $('#map_canvas');
	
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