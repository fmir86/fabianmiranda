var add = document.addEventListener ? 'addEventListener' : 'attachEvent';
var remove = document.removeEventListener ? 'removeEventListener' : 'detachEvent';


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