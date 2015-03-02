// Objects
var stage;
var cta;
var moneyAmount;
var dragRail;
var leftArrow;
var rightArrow;
var arrowInterval;
var textinput;
var copy1;
var copy2;
var copy3;
var copy4;

// MSN VALUES
var ZIPCODE_URL = "http://ad.doubleclick.net/clk;265954946;102080015;c;pc=[TPAS_ID]?http://www.progressive.com/quotestart.aspx?product=AU&zipcode=";
var URL_CODE = "&code=9903600426&dclid=%n-1384245-7212070-102080015-265954946-%erid!";
var clickTag = "http://www.progressive.com";

// Properties
var knobLeftPosition;
var dragWidth;
var knobWidth;


window.onload = function(){
	if (!Enabler.isInitialized()) {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitialized);
	}else{
	   enablerInitialized();
	}
	
	function enablerInitialized() {
		if (!Enabler.isVisible()) {
			Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,adVisible);
		}else{
			adVisible();
		}
	}
	function adVisible() {
	  startBanner();
	}
}

function startBanner(){
	
	stage = document.getElementById('stage');
	cta = document.getElementById('cta');
	textinput = document.getElementById('textinput');
	moneyAmount = document.getElementById('moneyAmount');
	dragRail = document.getElementById('dragRail');
	leftArrow = document.getElementById('leftArrow');
	rightArrow = document.getElementById('rightArrow');
	
	copy1 = document.getElementById('copy1');
	copy2 = document.getElementById('copy2');
	copy3 = document.getElementById('copy3');
	copy4 = document.getElementById('copy4');
	
	dragWidth = parseInt(getComputedStyle(dragRail).getPropertyValue("width"));
	knobWidth = parseInt(getComputedStyle(knob).getPropertyValue("width"));
	
	stage.style.visibility = "visible";
	
	textinput.value = "";
	
	// ANIMATION
	TweenLite.to(copy1, 0.6, {opacity:"1", delay:0.1});
	TweenLite.to(copy1, 0.6, {opacity:"0", delay:3.7});
	TweenLite.to(knob, 0.6, {left:"0", delay:3.7, onUpdate:updateValue});
	
	TweenLite.set(copy2, {clip:"rect(0px 77px 19px 77px)"});
	TweenLite.to(copy2, 0.6, {clip:"rect(0px 77px 19px 0px)", delay:3.7});
	
	TweenLite.to(copy2, 0.4, {opacity:"0", delay:7.3});
	
	TweenLite.to(knob, 0.6, {left:"96", delay:7.3, onUpdate:updateValue});
	TweenLite.to(copy3, 0.6, {opacity:"1", delay:7.9});
	
	TweenLite.to(knob, 0.6, {left:"48", delay:11.5, onUpdate:updateValue});
	TweenLite.to(copy3, 0.4, {opacity:"0", delay:11.5});
	
	TweenLite.to(copy4, 0.4, {opacity:"1", delay:11.9});
	TweenLite.to(flo_01, 0.3, {opacity:"0", delay:11.9});
	TweenLite.to(flo_02, 0.3, {opacity:"1", delay:11.9});
	
	TweenLite.delayedCall(12, activateInteraction);
}

function activateInteraction(){
	Draggable.create(knob, {bounds:dragRail, type:"left", cursor:"pointer", onDrag:updateValue});
	
	leftArrow.onmouseover = function(){ leftArrow.style.cursor = "pointer" };
	rightArrow.onmouseover = function(){ rightArrow.style.cursor = "pointer" };
		
	leftArrow.onmousedown = onPressed;
	rightArrow.onmousedown = onPressed;
	
	leftArrow.onmouseup = onReleased;
	leftArrow.onmouseout = onReleased;
	rightArrow.onmouseup = onReleased;
	rightArrow.onmouseout = onReleased;
	
	cta.onclick = sendzip;
	textinput.onkeydown = onKeyPressed;
}

function onKeyPressed(e){
	if(e.keyCode == "13" && textinput.value.length == 5){
		console.log("Got 5 - enter");
		window.open(String(ZIPCODE_URL + textinput.value + URL_CODE), "_blank");
	}else if(e.keyCode == "13" && textinput.value.length < 5){
		console.log( "not 5 - Enter" );
		window.open(clickTag, "_blank" )
	}
}	

function sendzip(){
	
	if( textinput.value.length == 5 ){
		console.log( "Got 5 - click" );
		window.open(String(ZIPCODE_URL + textinput.value + URL_CODE), "_blank");
	}else{
		console.log( "not 5 - click" );
		window.open(clickTag, "_blank" )
	}
}


function updateValue(){
	knobLeftPosition = parseInt(getComputedStyle(knob).getPropertyValue("left"));
	
	moneyAmount.innerHTML = "$" +
							(Math.round(knobLeftPosition / (dragWidth - knobWidth) * 100)+50) +
							"<sup>00</sup>";
}

function onPressed(e){
	console.log(e.target.id + " pressed");
	
	if(e.target.id == "rightArrow"){
		arrowInterval = setInterval(tweenToRight, 10);
	}else{
		arrowInterval = setInterval(tweenToLeft, 10);
	}
}

function tweenToRight(){
	if(parseInt(getComputedStyle(knob).getPropertyValue("left")) < (dragWidth - knobWidth)){
		TweenLite.to(knob, 0.01, {left:"+=1", onComplete:updateValue});
	}
}

function tweenToLeft(){
	if(parseInt(getComputedStyle(knob).getPropertyValue("left")) > 0){
		TweenLite.to(knob, 0.01, {left:"-=1", onComplete:updateValue});
	}
}

function onReleased(e){
	console.log(e.target.id + " released");
	clearInterval(arrowInterval);
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}