var stage, preloader, slideshow, solidArea;
var timeline;
var schwabLogo, picture, sign;
var yellowBox1, yellowBox2, yellowBox3, greyBox1, blackBox, transparentTab, contentStrip, exitLayer;
var discoverButton, evaluateButton, boostButton, enjoyButton, replayButton, backButton, cta1, cta2, signUpButton;
var myInt;
var item1, item2, item3, item4;
var myDrag;

function init(){
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

function exitAction(){
	Enabler.exit("main_Exit");
}


function adVisibilityHandler() {
	timeline 		= new TimelineMax();
	stage 			= document.getElementById("stage");
	preloader 		= document.getElementById("preloader");
	yellowBox1 		= document.getElementById("yellowBox1");
	yellowBox2 		= document.getElementById("yellowBox2");
	yellowBox3 		= document.getElementById("yellowBox3");
	schwabLogo 		= document.getElementById("schwabLogo");
	picture			= document.getElementById("picture");
	greyBox1		= document.getElementById("greyBox1");
	blackBox 		= document.getElementById("blackBox");
	discoverButton 	= document.getElementById("discoverButton");
	evaluateButton 	= document.getElementById("evaluateButton");
	boostButton 	= document.getElementById("boostButton");
	enjoyButton 	= document.getElementById("enjoyButton");
	cta1 			= document.getElementById("cta1");
	cta2 			= document.getElementById("cta2");
	sign			= document.getElementById("sign");
	slideshow 		= document.getElementById("slideshow");
	replayButton 	= document.getElementById("replayButton");
	transparentTab 	= document.getElementById("transparentTab");
	backButton 		= document.getElementById("backButton");
	signUpButton 	= document.getElementById("signUpButton");
	item1 			= document.getElementById("item1");
	item2 			= document.getElementById("item2");
	item3 			= document.getElementById("item3");
	item4 			= document.getElementById("item4");
	contentStrip 	= document.getElementById("contentStrip");
	exitLayer 		= document.getElementById("exitLayer");
	solidArea		= document.getElementById("solidArea");
		
	initElements();
}

function initElements(){
	// Set visibility
	stage.style.visibility = "visible";
	preloader.style.visibility = "hidden";
	
	// Set the initial properties and state
	TweenMax.set(schwabLogo, {rotationY:-90, transformOrigin:"50% 50%", transformPerspective:200});
	TweenMax.set(yellowBox1, {rotationY:90, transformOrigin:"50% 50%", transformPerspective:200, boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0.1)"});
	
	TweenMax.set(picture, {clip:"rect(50px,204px,228px,26px)", visibility:"hidden"});
	TweenMax.set(yellowBox2, {rotationY:90, transformOrigin:"50% 50%", transformPerspective:200});
	TweenMax.set(greyBox1, {visibility:"hidden"});
	TweenMax.set(yellowBox3, {visibility:"hidden"});
	TweenMax.set(blackBox, {rotationY:90, transformOrigin:"50% 50%", transformPerspective:200});
	TweenMax.set([discoverButton, evaluateButton, boostButton, enjoyButton], {rotationY:-90, transformOrigin:"50% 50%", transformPerspective:200});
	TweenMax.set([item2, item3, item4], {opacity:0.3});
	TweenMax.set(item1, {opacity:1});
	
	signUpButton.onclick = exitLayer.onclick = exitAction;
	startAnimation();
}

function startAnimation(){
	//Start the animation
	timeline.set(slideshow, {left:"300px"});		
	timeline.set(replayButton, {visibility:"hidden"});		
	
	timeline.to(schwabLogo, .7, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut});
	timeline.to(yellowBox1, .5, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut}, "-=0.4");
	
	timeline.set(picture, {visibility:"visible"});
	timeline.to(yellowBox1, .6, {rotationY:-90, transformOrigin:"0% 50%", transformPerspective:400, boxShadow: "40px 5px 10px 0px rgba(0, 0, 0, 0.0)", ease:Sine.easeIn}, "+=2.3");
	timeline.to(picture, .5, {clip:"rect(0px,300px,250px,0px)",ease:Sine.easeIn});
	timeline.to(yellowBox2, .7, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut});
	timeline.to([picture, yellowBox2], .3, {left:"-=300px", ease:Quad.easeInOut}, "+=2");
	
	timeline.from(greyBox1, .2, {left:"+=300px", ease:Quad.easeOut, onStart:function(){
		TweenMax.set(greyBox1, {visibility:"visible"});	
	}}, "-=.1");
	
	timeline.to(greyBox1, .3, {left:"-=300px", ease:Quad.easeInOut}, "+=4");
	
	timeline.from(yellowBox3, .2, {left:"+=300px", ease:Quad.easeOut, onStart:function(){
		TweenMax.set(yellowBox3, {visibility:"visible"});	
	}}, "-=.1");
	
	timeline.to(blackBox, .7, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut});
	timeline.to(discoverButton, 0.2, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut}, "-=.2");
	timeline.to(evaluateButton, 0.2, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut}, "-=.1");
	timeline.to(boostButton, 0.2, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut}, "-=.1");
	timeline.to(enjoyButton, 0.2, {rotationY:0, transformOrigin:"50% 50%", transformPerspective:200, ease:Expo.easeOut, onComplete:activateBlueButtons}, "-=.1");
	timeline.to(cta1, 0.7, {opacity:1, ease:Expo.easeOut}, "+=.1");
	timeline.to(cta2, 0.7, {opacity:1, ease:Expo.easeOut}, "-=.3");
	timeline.to(sign, 0.7, {opacity:1, ease:Expo.easeOut}, "-=.7");
	timeline.to(slideshow, 0.2, {left:"280px", ease:Back.easeOut}, "-=.2");
	
	timeline.to(replayButton, 0.2, {opacity:1, ease:Back.easeOut,
		onComplete:function(){
			activateReplayButton();
			activateTabPulse();
			setNormalBehavior();
			activateNavBar();
		},
	
		onStart:function(){
			TweenMax.set(replayButton, {visibility:"visible"});		
		}
	}, "-=.2");	
}

function activateBlueButtons(){
	discoverButton.addEventListener("mousedown", expandSlideshow);
	evaluateButton.addEventListener("mousedown", expandSlideshow);
	boostButton.addEventListener("mousedown", expandSlideshow);
	enjoyButton.addEventListener("mousedown", expandSlideshow);
	
	discoverButton.onmouseover = evaluateButton.onmouseover = boostButton.onmouseover = enjoyButton.onmouseover = growMouseOver;
	discoverButton.onmouseout = evaluateButton.onmouseout = boostButton.onmouseout = enjoyButton.onmouseout = decreaseMouseOut;
}

function growMouseOver(e){
	TweenMax.to(e.target, 0.1, {scale:1.05});
}

function decreaseMouseOut(e){
	TweenMax.to(e.target, 0.1, {scale:1});
}


function activateReplayButton(){
	replayButton.onmousedown = function(){
		console.log("replay");
		timeline.restart();
		clearTabPulse();
		TweenMax.to(slideshow, 0, {left:"300px"});
	}
}

function activateTabPulse(){
	myInt = setInterval(function(){
		TweenMax.to(slideshow, .1, {left:"270px", onComplete:function(){
			TweenMax.to(slideshow, .2, {left:"280px", ease:Back.easeOut});
		}});	
		
	}, 3000);
}

function clearTabPulse(){
	clearInterval(myInt);
}

function setNormalBehavior(){
	myDrag = Draggable.create(slideshow, {
		bounds:{left:-20, width:300}, type:"left",cursor:"move", trigger:transparentTab,
		onDragEnd:finishSwipeExpanded,
		onDragStart:clearTabPulse
	});
}

function finishSwipeExpanded(){	
	if(parseInt(getComputedStyle(slideshow).getPropertyValue("left")) < 260){
		TweenMax.to(slideshow, 0.1, {left:"-20px", ease:Quart.easeOut, onComplete:SwitchBehavior});
	}else{
		TweenMax.to(slideshow, 0.1, {left:"280px", ease:Quart.easeOut});
	}
}

function SwitchBehavior(){
	myDrag = Draggable.create(slideshow, {
		bounds:{left:-20, width:300}, type:"left",cursor:"move", trigger:solidArea,
		onDragEnd:finishSwipeCollapse,
		onDragStart:clearTabPulse
	});
}

function finishSwipeCollapse(){	
	if(parseInt(getComputedStyle(slideshow).getPropertyValue("left")) < 30){
		TweenMax.to(slideshow, 0.1, {left:"-20px", ease:Quart.easeOut});
	}else{
		TweenMax.to(slideshow, 0.1, {left:"280px", ease:Quart.easeOut, onComplete:setNormalBehavior});
	}
}

function expandSlideshow(e){
	SwitchBehavior();
	clearTabPulse();
	TweenMax.killTweensOf(slideshow);
	TweenMax.to(slideshow, 0.3, {left:"-20px", ease:Quart.easeOut, onComplete:activateNavBar});
	
	if(e.target.id == "discoverButton"){
		TweenMax.set(contentStrip, {left:"0px"});
		TweenMax.set([item2, item3, item4], {opacity:0.3});
		TweenMax.set(item1, {opacity:1});

	}else if(e.target.id == "evaluateButton"){
		TweenMax.set(contentStrip, {left:"-342px"});
		TweenMax.set([item1, item3, item4], {opacity:0.3});
		TweenMax.set(item2, {opacity:1});
		
	}else if(e.target.id == "boostButton"){
		TweenMax.set(contentStrip, {left:"-684px"});
		TweenMax.set([item1, item2, item4], {opacity:0.3});
		TweenMax.set(item3, {opacity:1});
		
	}else if(e.target.id == "enjoyButton"){
		TweenMax.set(contentStrip, {left:"-1026px"});
		TweenMax.set([item1, item2, item3], {opacity:0.3});
		TweenMax.set(item4, {opacity:1});
	}

}

function activateNavBar(){
	backButton.addEventListener("mousedown", function(){
		setNormalBehavior();
		TweenMax.to(slideshow, 0.3, {left:"280px", ease:Quart.easeOut, onComplete:activateTabPulse})
	});
	
	item1.addEventListener("mousedown", onItemClicked);
	item2.addEventListener("mousedown", onItemClicked);
	item3.addEventListener("mousedown", onItemClicked);
	item4.addEventListener("mousedown", onItemClicked);
}

function onItemClicked(e){
	
	TweenMax.set([item1, item2, item3, item4], {opacity:0.3});
	TweenMax.set(e.target, {opacity:1});
	
	if(e.target.id == "item1"){
		TweenMax.to(contentStrip, .5, {left:"0px", ease:Quart.easeInOut});
	}else if(e.target.id == "item2"){
		TweenMax.to(contentStrip, .5, {left:"-342px", ease:Quart.easeInOut});
	}else if(e.target.id == "item3"){
		TweenMax.to(contentStrip, .5, {left:"-684px", ease:Quart.easeInOut});
	}else if(e.target.id == "item4"){
		TweenMax.to(contentStrip, .5, {left:"-1026px", ease:Quart.easeInOut});
	}
}