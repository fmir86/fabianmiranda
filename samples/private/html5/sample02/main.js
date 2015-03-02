var banner = (function() {
	'use strict';
	function Banner() {
		// constants
		var ZV = 'ZIPCODE';

		// private variables
		var b = $('banner');
		var e = Enabler;
		var f = $('zipForm');
		var st = setTimeout;
		var z = $('zip');
		var zs = $('activeArea');

		// initialization
		var add = b.addEventListener ? 'addEventListener' : 'attachEvent';
		b[add]('click', onExit);
		f[add]('click', onFormClick);
		z[add]('focus', onZipFocus);
		z[add]('blur', onZipBlur);
		z[add]('keydown', onZipKeydown);
		zs[add]('click', zipSubmit);
		zs[add]('mouseover', onHover);


		// private methods
		function $(id) {
			return document.getElementById(id);
		}

		function onEnablerVisible() {
			st(showData1, 300);
		}
		
		function showData1(){
			st( function(){$('digit1').className = 'fadeIn'} , 0);
			st( function(){$('digit2').className = 'fadeIn'} , 100);
			st( function(){$('digit3').className = 'fadeIn'} , 200);
			st(showData2, 1000);
		}
		
		function showData2(){
			st( function(){$('digit4').className = 'fadeIn'} , 0);
			st( function(){$('digit5').className = 'fadeIn'} , 100);
			st( function(){$('digit6').className = 'fadeIn'} , 200);
			st(showData3, 1000);
		}

		function showData3(){
			st( function(){$('digit7').className = 'fadeIn'} , 0);
			st( function(){$('digit8').className = 'fadeIn'} , 100);
			st( function(){$('digit9').className = 'fadeIn'} , 200);
			st( function(){$('flo').className = 'in'} , 600);
			st(crossingBall, 1200);
		}
		
		function crossingBall(){
			$('ball').className = 'in curve';
			st(function(){$('finalCopy').className = 'in'}, 50);
			
			st( endFrame, 1000);
		}
		
		function endFrame(){
			$('high1').className = $('high2').className = $('high3').className = 'fadeIn';
		
			st(function(){
				$('digit1').className = $('digit2').className = $('digit3').className = 'fadeOut';
			}, 250);
			
			st(onHover, 1000);
		}
		

			

		
		function onFormClick(e) {
			e.stopImmediatePropagation();
		}

		function onZipFocus() {
			if(z.value === ZV) {
				z.value = '';
			}
		}

		function onZipBlur() {
			z.value = z.value || ZV;
		}

		function onZipKeydown(e) {
			var k = e.which ? e.which : e.keyCode;
			// allow only numbers, arrows, delete, enter and backspace
			if(!e.metaKey && !((k > 47 && k < 58) || (k > 95 && k < 106) || (k > 36 && k < 41) || k == 46 || k == 13 || k == 8)) {
				e.preventDefault();
			}
			if(k == 13) {
				zipSubmit();
			}
		}

		function zipSubmit() {
			// ZIP exit
		}

		function onExit() {
			// main exit
		}
		
		function onHover(){
			$('shimmer').className = '';
			st( function(){$('shimmer').className = 'on'} , 100);
		}
		
		// privileged methods
		this.init = function() {
			onEnablerVisible();
		};
	}
	return new Banner();
})();
