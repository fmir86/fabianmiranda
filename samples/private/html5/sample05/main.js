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
		var int;
		var i = 0;

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
			st(showAnim, 300);
		}
		
		function showAnim(){
			
			function changeFrame(){
				$('splash').style.backgroundPosition = "" + (-153*i) + "px 0px";	
				if(i < 2) i++; else i = 0;
			}
			
			int = setInterval(changeFrame, 50);	
					
			st(function(){$('floContainer').className = $('rope').className = 'frame1_out'}, 100);
			st(function(){$('copy1').className = 'frame1'}, 200);
			
			st(function(){$('floContainer').className = $('rope').className = 'frame1_in'}, 800);
			
			st(function(){$('floContainer').className = $('rope').className = 'frame2_out'}, 2000);
			st(function(){$('copy2').className = 'frame2'}, 2200);
			st(function(){$('copy1').className = 'frame2'}, 2300);
			st(function(){$('floPose1').className = "fadeout"}, 2300);
			st(function(){$('floPose2').className = "fadein"}, 2300);
			st(function(){$('floContainer').className = $('rope').className = 'frame2_in'}, 2700);
			
			st(function(){$('floContainer').className = $('rope').className = "frame3_out"}, 4000);
			st(function(){$('copy3').className = 'frame3'}, 4100);
			st(function(){$('copy2').className = 'frame3'}, 4600);
			st(function(){$('floPose2').className = "fadeout"}, 4600);
			st(function(){$('floPose3').className = "fadein"}, 4600);
			
			st(function(){$('floContainer').className = $('rope').className = "frame3_in"}, 5000);
			st(function(){clearInterval(int)}, 7400);
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
