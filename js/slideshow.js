var slideshowComponent = (function() {
	
	'use strict';
	
	function Slideshow() {
		
		var slides = [];
		var currentSlide = 0;
		var slideshow = $("#slideshow");
		var slidesWrap = $("#slideshowWrap");
		var slidesBullets = $("#slidesBullets");
		var slideSelector;
		var addedBulletsCounter = 0;
		var myInt;
		
		for(var i = 0; i < $(".slide").length; i++){ slides.push($(".slide")[i])};
		
		slideSelector = document.createElement("img");
		slideSelector.src = "images/ring.png";
		TweenMax.set(slideSelector, {position:"absolute", left:"-20px", top:"-4px", opacity:0});
		slidesBullets.appendChild(slideSelector);
		
		function initSlideshow(){
			initSlides();
			if(slides.length > 1) createBulletsIndicator();
		}
		
		
		function initSlides(){
			for (var i = 0; i < slides.length; i++){
				var slide = slides[i];
				var slideTextContainer = slides[i].getElementsByClassName("slideTextContainer")[0];
				var title = slides[i].getElementsByClassName("slideTextContainer")[0].getElementsByTagName("h2")[0];
				var message = slides[i].getElementsByClassName("slideTextContainer")[0].getElementsByTagName("p")[0];
				var readMoreLink = slides[i].getElementsByClassName("slideTextContainer")[0].getElementsByTagName("a")[0];
				
				TweenMax.set(slide, {display:"none"});
				TweenMax.set([title, message, slideTextContainer, readMoreLink], {opacity:0});
			}
		}
		
		function autoPlay(){
			myInt = setInterval(function(){
				currentSlide = ((currentSlide+1) < slides.length) ? currentSlide+1 : 0;
				callNewSlide();
			}, 5000);
		}
		
		function createBulletsIndicator(){
			for(var i = 0; i < slides.length; i++){
				var bullet = document.createElement("img");
				bullet.id = "bullet" + i;
				bullet.style.top = "0px";
				bullet.style.left = ((i+1) > 1) ? (((13+10) * i) + "px") : ("0px") ;
				bullet.src = "images/slideBullet.png";
				bullet.style.position = "absolute";
				bullet.style.cursor = "pointer";
				bullet.addEventListener("load", addBullet);
				if(!mobilecheck()) bullet.addEventListener("click", onBulletClicked);
			}
			// CENTER BULLETS VERTICALLY
			slidesBullets.style.width = (((13+10) * slides.length)-10) + "px";
			slidesBullets.style.margin = "0 auto";
		}
		
		function addBullet(evt){
			slidesBullets.appendChild(evt.currentTarget);
			addedBulletsCounter++;
			
			// IF FINALLY SLIDE BULLETS ARE READY
			if(addedBulletsCounter == slides.length){
				if( !mobilecheck() ){
					callNewSlide();
					autoPlay();
				}else{
					setCurrentSlide();
				}
			}
		}
		
		function setCurrentSlide(){
			var currentBulletLeft = parseInt(getComputedStyle(document.getElementById("bullet" + currentSlide)).getPropertyValue("left"));
			var currentBulletTop = parseInt(getComputedStyle(document.getElementById("bullet" + currentSlide)).getPropertyValue("top"));
			
			TweenMax.to(slideSelector, 0.3, {left:currentBulletLeft-4 + "px", top:currentBulletTop-4 + "px", opacity:1, ease:Quad.easeInOut});
		}
		
		function onBulletClicked(evt){
			if(evt.currentTarget.id != ("bullet" + currentSlide)){
				currentSlide = parseInt(evt.currentTarget.id.substr(6,1));
				callNewSlide();
				clearInterval(myInt);
			}
		}
		
		function callNewSlide(){
			var slide = slides[currentSlide];
			var title = slides[currentSlide].getElementsByClassName("slideTextContainer")[0].getElementsByTagName("h2")[0];
			var message = slides[currentSlide].getElementsByClassName("slideTextContainer")[0].getElementsByTagName("p")[0];
			var frame = slides[currentSlide].getElementsByClassName("slideTextContainer")[0];
			var readMoreLink = slides[currentSlide].getElementsByClassName("slideTextContainer")[0].getElementsByTagName("a")[0];
			
			TweenMax.set(slide, {display:"block"});
			TweenMax.set([slide, title,message,frame, readMoreLink], {opacity:0});
			TweenMax.set([title, message], {transform:"translate(-20px)"})
			TweenMax.set(frame, {transform:"translate(-300px)"})
			slidesWrap.appendChild(slide);
			
			TweenMax.to(slide, 1, {opacity:1});
			TweenMax.to(frame, 0.5, {opacity:1, transform:"translate(0px)", delay:0.3});
			TweenMax.to(title, 0.5, {opacity:1, transform:"translate(0px)", delay:0.7});
			TweenMax.to(message, 0.5, {opacity:1, transform:"translate(0px)", delay:1});
			TweenMax.to(readMoreLink, 0.5, {opacity:1, delay:1.5});
			
			setCurrentSlide();
		}
		
		function initMobileSlideshow(){
			
			if(slides.length > 1) createBulletsIndicator();
			
			TweenLite.set(slidesBullets, {top:"10px"});
			
			for(var i = 0; i < $(".slide").length; i++){
				 TweenLite.set($(".slide")[i], {position:"relative", width:"100%", float:"left", display:"inline-block"});
			}
			
			TweenLite.set($("#slideshowWrap"), {position:"relative", overflow:"hidden", width:"100%"});
			
			window.mySwipe = Swipe(slideshow, {
				startSlide: 0,
			  	auto: 5000,
				callback: function(index, element) {
					currentSlide = index;
					setCurrentSlide();
				}
			});
		}
		
		
		if(mobilecheck()){
			initMobileSlideshow();
		}else{
			initSlideshow();
		}
	}
	
	return new Slideshow();
})();



