jQuery(function($){
	'use strict';


	// -------------------------------------------------------------
	//   One Item Per Frame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#slider-medinfer');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')

		});


		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});


	}());


});


function show_menu(){
	document.getElementById("menu").className += " open";
}
function hide_menu(){
	document.getElementById("menu").className = "menu";
}
function show_rcm_imicare(){
	document.getElementById("rcm_imicare").className += " rcm_1 show";
}
function hide_rcm_imicare(){
	document.getElementById("rcm_imicare").className = "rcm_container";
}
function show_rcm_isotre(){
	document.getElementById("rcm_isotre").className += " rcm_2 show";
}
function hide_rcm_isotre(){
	document.getElementById("rcm_isotre").className = "rcm_container";
}
function show_rcm_mino(){
	document.getElementById("rcm_mino").className += " rcm_2 show";
}
function hide_rcm_mino(){
	document.getElementById("rcm_mino").className = "rcm_container";
}

$( ".menu ul li" ).click(function() {
  	$( ".menu" ).removeClass( "open" );
  	$(this).addClass('active').siblings().removeClass('active');
  	$(".rcm_container").removeClass('rcm_1 rcm_2 rcm_3 show');

});