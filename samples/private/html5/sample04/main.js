var banner = (function() {
	'use strict';
	function Banner() {
		// constants
		var ZV = 'ZIP CODE';

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
			st(showData, 300);
		}
		
		function showData(){
			$('flo').className = 'in';
			st( function(){$('ribbon').className = 'in'} , 300);
			st( function(){$('flag1').className = 'in'} , 1000);
			st( function(){$('flag2').className = 'in'} , 2000);
			st( function(){$('flag3').className = 'in'} , 3000);
			
			st( function(){$('over').className = 'on'} , 4000);
			
			st( function(){$('shimmer').className = ''} , 4700);
			st( function(){$('shimmer').className = 'on'} , 4800);
			st( function(){$('glow').className = 'on'} , 4800);
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