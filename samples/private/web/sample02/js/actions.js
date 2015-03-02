// JavaScript Document

var copy9;
var ctaBox;
var stage;

function init(){
		
	copy9 = document.getElementById('copy9');
	ctaBox = document.getElementById('ctaBox');
	stage = document.getElementById('stage');		
	
	TweenMax.set(stage, {visibility:"visible", scale:(window.innerWidth/320), top:"0px", left:"0px", transformOrigin:"left top"});
	
	
	 window.onorientationchange = function(){
		
		TweenMax.set(stage, {visibility:"hidden"});
		
		if(window.orientation == 0){
			//location.reload();
			TweenLite.delayedCall(0.500, function(){
				TweenMax.set(stage, {visibility:"visible", scale:(window.innerWidth/320), top:"0px", left:"0px", transformOrigin:"left top"});
			}); 
		}else{
		 	//location.reload();
			TweenLite.delayedCall(0.500, function(){
				TweenMax.set(stage, {visibility:"visible", scale:(window.innerWidth/320), top:"0px", left:"0px", transformOrigin:"left top"});
			}); 
		}
		
		window.scrollTo(0, 1);
	};
	
    setTimeout(function(){
      window.scrollTo(0, 1);
    }, 0);	
		
	//INITIAL PROPERTIES
	TweenMax.set(schwabLogo, {rotationY:-180, opacity:0});
	TweenMax.set(yellowBox, {left:"-=300"});
	TweenMax.set(greyBox, {left:"+=300"});
	TweenMax.set(blackBox, {left:"+=300"});
	TweenMax.set(ctaBox, {scale:0.1, opacity:0});
	TweenMax.set(iphone, {clip:"rect(0px 127px 0px 0px)", top:"+=193"});
	TweenMax.set([copy1], {opacity:0, left:"+=20px"});
	TweenMax.set([copy2, copy3, copy4], {opacity:0, left:"-=10px"});
	
	TweenMax.set([copy5, copy6, copy7, copy8, copy9, sign, isi], {opacity:0});
	TweenMax.set([star1, star2, star3, star4], {opacity:0, scale:2});
	TweenMax.set([bullet1, bullet2, bullet3], {opacity:0, visibility:"visible"});

	
	//ANIMATION
	
	TweenMax.to(schwabLogo, 0.4, {rotationY:0, transformPerspective:600, opacity:1, ease:Quad.easeOut});
	
	TweenMax.to(yellowBox, 0.2, {left:"+=300", opacity:1, delay:0.5, ease:Quart.easeOut});
	TweenMax.to(copy1, 0.3, {opacity:1, left:"-=20", delay:0.7, ease:Expo.easeOut});
	TweenMax.to(copy2, 0.3, {opacity:1, left:"+=10", delay:1.1, ease:Expo.easeOut});
	TweenMax.to(copy3, 0.3, {opacity:1, left:"+=10", delay:1.1, ease:Expo.easeOut});
	TweenMax.to(copy4, 0.3, {opacity:1, left:"+=10", delay:1.1, ease:Expo.easeOut});
	
	TweenMax.to(greyBox, 0.2, {left:"-=300", opacity:1, delay:1.4, ease:Quart.easeOut});
	TweenMax.to(copy6, 0.2, {opacity:1, delay:1.7, ease:Quart.easeOut});
	TweenMax.to(star1, 0.3, {scale:1, opacity:1, delay:1.9, ease:Quart.easeOut});
	TweenMax.to(star2, 0.3, {scale:1, opacity:1, delay:2.0, ease:Quart.easeOut});
	TweenMax.to(star3, 0.3, {scale:1, opacity:1, delay:2.1, ease:Quart.easeOut});
	TweenMax.to(star4, 0.3, {scale:1, opacity:1, delay:2.2, ease:Quart.easeOut});
	TweenMax.to(copy7, 0.2, {opacity:1, delay:2.4, ease:Quart.easeOut});
	
	TweenMax.to(blackBox, 0.2, {left:"-=300", opacity:1, delay:1.5, ease:Quart.easeOut});
	TweenMax.to(copy5, 0.2, {opacity:1, delay:1.7, ease:Quart.easeOut});
	
	TweenMax.to(ctaBox, 0.2, {scale:1, opacity:1, delay:2.7, ease:Expo.easeOut});
	
	TweenMax.to(iphone, 0.4, {clip:"rect(0px 127px 193px 0px)", top:"-=193", ease:Expo.easeOut, delay:3});
	
	TweenMax.to(copy8, 0.2, {opacity:1, delay:3.4});
	
	TweenMax.to(copy9, 0.3, {opacity:1, delay:4});
	TweenMax.to(sign, 0.3, {opacity:1, delay:4});
	TweenMax.to(isi, 0.3, {opacity:1, delay:4.5});
	
	TweenMax.delayedCall(8.3, showBullets);
}

function showBullets(){
	TweenMax.to([copy2, copy3, copy4], 0.2, {opacity:0});
	
	TweenMax.set([bullet1, bullet2, bullet3], {opacity:0, left:"-=20px"});
	TweenMax.to(bullet1, 0.2, {opacity:1, left:"+=20px", ease:Quart.easeOut, delay:0.2});
	TweenMax.to(bullet2, 0.2, {opacity:1, left:"+=20px", ease:Quart.easeOut, delay:0.3});
	TweenMax.to(bullet3, 0.2, {opacity:1, left:"+=20px", ease:Quart.easeOut, delay:0.4});
	
	TweenMax.delayedCall(4.6, showPromo);
}

function showPromo(){
	TweenMax.to([bullet1, bullet2, bullet3], 0.2, {opacity:0});
	
	TweenMax.set([copy2, copy3, copy4], {opacity:0, left:"-=20px"});
	TweenMax.to(copy2, 0.2, {opacity:1, left:"+=20px", ease:Quart.easeOut, delay:0.2});
	TweenMax.to(copy3, 0.2, {opacity:1, left:"+=20px", ease:Quart.easeOut, delay:0.3});
	TweenMax.to(copy4, 0.2, {opacity:1, left:"+=20px", ease:Quart.easeOut, delay:0.4});
	
	TweenMax.delayedCall(4.6, showBullets);
}

function callFloodlight_same(href) {
	if(href)setTimeout("window.location.href ='" + href + "';", 1000);    
}

function backToTop(){
	window.scrollTo(0, 1);
}