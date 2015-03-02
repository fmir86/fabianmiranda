function SlideShow(container) {
	
	var slides = [];
	var currentSlide = 0;
	var slideshowWrap = container.getElementsByClassName("slideshowWrap")[0];
	var slidesBullets = container.getElementsByClassName("slidesBullets")[0];
	var slideSelector;
	var addedBulletsCounter = 0;
	var myInt;
		
	for(var i = 0; i < slideshowWrap.getElementsByClassName("slide").length; i++){ 
		slides.push(slideshowWrap.getElementsByClassName("slide")[i]);
	}
	
	slideSelector = document.createElement("img");
	slideSelector.src = "images/whiteDot.png";
	TweenMax.set(slideSelector, {position:"absolute", left:"-20px", top:"0px"});
	slidesBullets.appendChild(slideSelector);
	
	function initSlideshow(){
		initSlides();
		if(slides.length > 1) createBulletsIndicator();
	}
		
	function initSlides(){
		for (var i = 0; i < slides.length; i++){
			var slide = slides[i];
			TweenMax.set(slide, {display:"none", opacity:0});
		}
	}
	
	function createBulletsIndicator(){
		for(var i = 0; i < slides.length; i++){
			var bullet = document.createElement("img");
			bullet.className = "bullet" + i;
			bullet.style.top = "0px";
			bullet.style.left = ((i+1) > 1) ? (((13+10) * i) + "px") : ("0px") ;
			bullet.src = "images/slideBullet.png";
			bullet.style.position = "absolute";
			bullet.style.cursor = "pointer";
			bullet.addEventListener("load", addBullet);
			if(!mobilecheck()) bullet.addEventListener("click", onBulletClicked);
		}
		slidesBullets.style.width = (((13+10) * slides.length)-10) + "px";
		slidesBullets.style.margin = "8px auto 3px auto";
		if(mobilecheck()){
			slidesBullets.style.margin = "0px auto 3px auto";
			slidesBullets.style.height = "20px"
		}
	}
	
	function addBullet(evt){
		slidesBullets.appendChild(evt.currentTarget);
		addedBulletsCounter++;
		
		if(addedBulletsCounter == slides.length){
			
			slidesBullets.appendChild(slideSelector);
			
			if( !mobilecheck() ){
				callNewSlide();
				autoPlay();
			}else{
				setCurrentSlide();
			}
		}
	}
	
	function autoPlay(){
		myInt = setInterval(function(){
			currentSlide = ((currentSlide+1) < slides.length) ? currentSlide+1 : 0;
			callNewSlide();
		}, 5000);
	}
	
	function setCurrentSlide(){
		var currentBulletLeft = parseInt(getComputedStyle(container.getElementsByClassName("bullet" + currentSlide)[0]).getPropertyValue("left"));
		var currentBulletTop = parseInt(getComputedStyle(container.getElementsByClassName("bullet" + currentSlide)[0]).getPropertyValue("top"));
		
		TweenMax.to(slideSelector, 0.3, {left:currentBulletLeft + "px", top:currentBulletTop + "px", opacity:1, ease:Quad.easeInOut});
	}
	
	function onBulletClicked(evt){
		if(evt.currentTarget.className != ("bullet" + currentSlide)){
			currentSlide = parseInt(evt.currentTarget.className.substr(6,1));
			callNewSlide();
			clearInterval(myInt);
		}
	}
	
	function callNewSlide(){
		var slide = slides[currentSlide];
		
		TweenMax.set(slide, {display:"block", opacity:0});
		slideshowWrap.appendChild(slide);
		
		TweenMax.to(slide, 1, {opacity:1});		
		setCurrentSlide();
	}
	
	function initMobileSlideshow(){
		
		if(slides.length > 1) createBulletsIndicator();
		
		TweenLite.set(slidesBullets, {top:"10px"});
		
		for(var i = 0; i < container.getElementsByClassName("slide").length; i++){
			 TweenLite.set(container.getElementsByClassName("slide")[i], {position:"relative", width:"100%", float:"left", display:"inline-block"});
		}
		
		TweenLite.set(slideshowWrap, {position:"relative", overflow:"hidden", width:"100%"});
				
		window.mySwipe = Swipe(container, {
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



