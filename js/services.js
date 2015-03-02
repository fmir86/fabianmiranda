var add = document.addEventListener ? 'addEventListener' : 'attachEvent';
var remove = document.removeEventListener ? 'removeEventListener' : 'detachEvent';

var iconsArray;
var boxesList = document.getElementsByClassName("fluidBox2");



for(var i = 0; i < document.getElementsByClassName("fluidBox2").length; i++) {
	console.log(navigator.userAgent);
	if(window.ActiveXObject || "ActiveXObject" in window){
		$clamp(document.getElementsByClassName("fluidBox2")[i].getElementsByTagName("p")[0], {clamp: 3});
	}else{
		$clamp(document.getElementsByClassName("fluidBox2")[i].getElementsByTagName("p")[0], {clamp: 2});
	}
}




window.onload = function(){

	iconsArray = document.getElementById("detailedInfo").getElementsByTagName("object");

	for(var i = 0; i < iconsArray.length; i++){
	
		var svgImage = iconsArray[i].getSVGDocument();
		console.log(svgImage);
		
		if(svgImage.querySelector("path") != null){
			for(var j = 0; j<svgImage.querySelectorAll("path").length; j++){
				svgImage.querySelectorAll("path")[j].setAttribute("fill", "#FFF");
			}
		}
		
		if(svgImage.querySelector("polygon") != null){
			for(var j = 0; j<svgImage.querySelectorAll("polygon").length; j++){
				svgImage.querySelectorAll("polygon")[j].setAttribute("fill", "#FFF");
			}
		}
		
		adjustIconsSize();
		window[add]("orientationchange", adjustIconsSize);
				
	}
}

function adjustIconsSize(){
	for(var i = 0; i < iconsArray.length; i++){
	
		var svgImage = iconsArray[i].getSVGDocument();				
		var initChildWidth =  parseInt(svgImage.querySelector("svg").getAttribute("width"));
		var parentWidth = parseInt(getComputedStyle(document.getElementsByClassName("titleWrapper")[0]).getPropertyValue("width"));
		var newChildWidth = Math.round(parentWidth * 0.7);
		var newChildHeight = parseInt(svgImage.querySelector("svg").getAttribute("height")) * (newChildWidth / initChildWidth);
		
		svgImage.querySelector("svg").setAttribute("width", newChildWidth + "px");
		svgImage.querySelector("svg").setAttribute("height", newChildHeight + "px");
		iconsArray[i].style.height = newChildHeight + "px";
		
		iconsArray[i].style.visibility = "visible";
	}
}
	

