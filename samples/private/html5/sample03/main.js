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
			st(Anim, 300);
		}
		
		function Anim(){
			st( function(){$('copy1').className = 'fadein'} , 0);
			
			st( function(){
				$('handle').className = 'pull';
				$('ball').className = 'down';
			}, 700);

			st( function(){
				$('handle').className = '';
				$('ball').className = ''
			} , 1000);
			
			st( function(){$('digit1').className = 'digits in'} , 1200);
			st( function(){$('digit2').className = 'digits in'} , 1400);
			st( function(){$('digit3').className = 'digits in'} , 1600);
			
			st( function(){
				$('handle').className = 'pull';
				$('ball').className = 'down';
			} , 2300);

			st( function(){
				$('handle').className = '';
				$('ball').className = '';
			} , 2600);
			
			st( function(){$('digit4').className = 'digits in'} , 2800);
			st( function(){$('digit5').className = 'digits in'} , 3000);
			st( function(){$('digit6').className = 'digits in'} , 3200);
			st( function(){$('flo').className = 'in'} , 3200);
			
			st( function(){
				$('copy2').className = 'fadein';
				showParticles();
			} , 3600);
			
			st( onHover , 3800);
			
			st( function(){$('canvas').className = 'out'} , 10000);
			st(stopConfetti, 10500);
		}
				
		function onFormClick(e) { e.stopImmediatePropagation() };
		function onZipFocus() { if(z.value === ZV) z.value = '' };
		function onZipBlur() { z.value = z.value || ZV };

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