var stage;
var timeline;
var schwabLogo
var copy1, copy2, copy3, copy4, copy5;
var yellowBox, blackBox, exitLayer;
var cta;
var sign;
var image;
var bgd;


//TweenMax.ticker.fps(18);

function initEnabler(){	
	// If true, start function. If false, listen for INIT.
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}

function enablerInitHandler() {
    // If true, start function. If false, listen for PAGE_LOADED.
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}

function pageLoadedHandler() {
	//If true, start function. If false, listen for VISIBLE.
	if (Enabler.isVisible()) {
		  adVisibilityHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
	}
	
}


function adVisibilityHandler() {
	timeline 	= new TimelineMax();
	grayBox 	= document.getElementById("grayBox");
	stage 		= document.getElementById("stage");
	bgd 		= document.getElementById("bgd");
	image 		= document.getElementById("image");
	schwabLogo 	= document.getElementById("schwabLogo");
    yellowBox 	= document.getElementById("yellowBox");
	copy1 		= document.getElementById("copy1");
	copy2 		= document.getElementById("copy2");
	copy3 		= document.getElementById("copy3");
	copy4 		= document.getElementById("copy4");
	copy5 		= document.getElementById("copy5");
	blackBox 	= document.getElementById("blackBox");
	cta 		= document.getElementById("cta");
	sign 		= document.getElementById("sign");
	exitLayer 	= document.getElementById("exitLayer");
	
	grayBox.style.visibility = "hidden";
	stage.style.visibility = "visible";

	
	initElements();
	getTime();
}

function initElements(){
	TweenMax.set(image, {left: "0px", top: "0px", scale:2, ease:Quart.easeOut});
	TweenMax.set(schwabLogo, {rotationY:-90, transformOrigin:"50% 50%", transformPerspective:200});
	TweenMax.set(yellowBox, {rotationY:90, transformOrigin:"left 50%", transformPerspective:200});
	TweenMax.set(blackBox, {rotationY:90, transformOrigin:"50% 50%", transformPerspective:200});
	TweenMax.set(cta, {top: "265px", ease:Quart.easeOut});
	TweenMax.set(counter,{top:"90px", left:"10px", transformOrigin:"0% 0%"});
	Animation1();
}
		
function Animation1(){
	yellowBox.style.visibility = "visible";
	timeline.to(image, 1,{top: "0px", left: "0px", scale:1, ease:Quart.easeOut});
	timeline.to(schwabLogo, .7, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut});	
	timeline.to(yellowBox, .5, {rotationY:0, transformOrigin:"0% 50%", transformPerspective:200, ease:Expo.easeOut}, "-=0.4");
	timeline.to(copy1, .7,{opacity:1}, "-=0.3");
	timeline.to(copy1, 0.5,{opacity:0}, "+=1.5");
	Animation2();
}

function Animation2(){
	timeline.to(yellowBox, 0.5,{opacity:1, left: "0px", top: "0px", scaleX:1.95, scaleY:2.2,ease:Quart.easeOut});
	timeline.to(copy2, 0.5,{opacity:1});
	timeline.to(counter, 0.5,{autoAlpha:1}, "-=.5");
	timeline.to(copy2, 0.5,{opacity:0}, "+=3");
	timeline.to(counter, 0.5,{opacity:0}, "-=.5");
	Animation3();
}

function Animation3(){
	timeline.to(yellowBox, 0.5,{left: "59px", top: "20px", scaleX:1.17, scaleY:1.18,ease:Quart.easeOut});
	timeline.to(image, 0.5,{opacity:0}, "-=0.4");
	timeline.to(copy3, 0.5,{opacity:1});
	timeline.to(copy4, 0.5,{opacity:1}, "-=.2");
	timeline.to(counter, 0.5,{opacity:1, onStart:function(){
		TweenMax.set(counter, {fontSize:"30px", left:"64px", top:"132px"})
	}}, "-=.5");

	timeline.to(blackBox, .7, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut});
	timeline.to(copy5, 0.5,{opacity:1});
	timeline.to(cta, 0.5,{top: "219px", ease:Quart.easeOut});
	timeline.to(sign, 1, {opacity:1, ease:Expo.easeOut}, "-=.5");
	cta.addEventListener("click", fireExit);
	exitLayer.addEventListener("click", fireExit);
}

//---------Clicktag - CTA--------  
  
  function fireExit(){
  	Enabler.exit("mainExit");
  }
  
 
  
  
