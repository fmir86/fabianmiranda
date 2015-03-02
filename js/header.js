var add = document.addEventListener ? 'addEventListener' : 'attachEvent';
var remove = document.removeEventListener ? 'removeEventListener' : 'detachEvent';
var scaleAnimationArray = document.getElementsByClassName("scaleAnimation");
var tl = new TimelineLite();
var mobMenuVisible = false;

function $(elem){
	if(elem.substr(0,1) == "#"){
		return document.getElementById( elem.substr(1, elem.length) );
	}else if(elem.substr(0,1) == "."){
		return document.getElementsByClassName( elem.substr(1, elem.length) );
	}else{
		return document.getElementsByTagName(elem);
	}
}

/******** MAIN NAV LISTENERS *******/
for( var i = 0; i < $("#mainHeaderNav").getElementsByTagName("a").length; i++){
	$("#mainHeaderNav").getElementsByTagName("a")[i][add]("mouseover", onHover, false);
	$("#mainHeaderNav").getElementsByTagName("a")[i][add]("mouseout", onHoverOff, false);
}

/******** SECONDARY NAV LISTENERS *******/
for( var i = 0; i < scaleAnimationArray.length; i++){
	scaleAnimationArray[i][add]("mouseover", zoomInOut, false);
}

function onHover(evt){
	evt.currentTarget.getElementsByTagName("div")[0].className = "imgHover";
}

function onHoverOff(evt){
	evt.currentTarget.getElementsByTagName("div")[0].className = "";
}

function zoomInOut(evt){
	var image;
	image = evt.currentTarget.getElementsByTagName("img")[0];
	
	tl.to(image, 0.2, {opacity:0, scale:"0.1, 0.1", ease:Quad.easeIn});
	tl.to(image, 0, {opacity:0, scale:"2, 2"});
	tl.to(image, 0.2, {opacity:1, scale:"1, 1"});
}

/******** MOBILE NAVIGATION *******/

    var mql = window.matchMedia('(max-width: 630px)');
	mql.addListener(onMediaMatch);
	onMediaMatch();
	
	function onMediaMatch(){
		if (mql.matches){
			console.log('MATCHES');
			$("#mobileMenuTrigger")[add]("click", toggleMenu, false);
			assignClickListeners();
		} else {
			console.log('NO MATCH');
			$("#mobileMenuTrigger")[remove]("click", toggleMenu, false);
			TweenLite.set($("#headerNav"), {display:""});
			removeClickListeners();
		}
	}


/*enquire.register("(max-width: 630px)", {
	match: function() {
		console.log('MATCHES');
		$("#mobileMenuTrigger")[add]("click", toggleMenu, false);
		assignClickListeners();
	},
	unmatch : function() {
		console.log('NO MATCH');
		$("#mobileMenuTrigger")[remove]("click", toggleMenu, false);
		TweenLite.set($("#headerNav"), {display:""});
		removeClickListeners();
	}
});
*/
function toggleMenu(){
	if(mobMenuVisible){
		TweenLite.set($("#headerNav"), {display:"none"});
		mobMenuVisible = false;
	}else{
		TweenLite.set($("#headerNav"), {display:"block"});
		mobMenuVisible = true;
	}
}

function assignClickListeners(){
	for(var i = 0; i < $(".headerAnchor").length; i++){
		$(".headerAnchor")[i][add]("click", toggleMenu, false );
	}
}

function removeClickListeners(){
	for(var i = 0; i < $(".headerAnchor").length; i++){
		$(".headerAnchor")[i][remove]("click", toggleMenu, false );
	}
}
