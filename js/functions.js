jQuery(function($){
	'use strict';


	// -------------------------------------------------------------
	//   One Item Per Frame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#slider-medinfer');
		var $wrap  = $frame.parent();

		
		var sly = new Sly('#slider-medinfer', 
        {
            horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBy: 1,
			speed: 800,
			swingSpeed: 0.2,
			elasticBounds: 0,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,


			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
        });
          
		// To Center button

        sly.init(); 

        $wrap.find('.toCenter').on('click', function () {
        	var item = $(this).data('item');
        	// Animate a particular item to the center of the frame.
        	// If no item is provided, the whole content will be animated.
        	$frame.sly('toCenter', item);
        });


		 sly.on('change', function (eventName) {
                
                //console.log(eventName); // 
                //console.log(this.rel.activeItem);
                //console.log($(".active").attr("cor"));
                // change color svg
                $(".menu_btn svg path").attr("fill", $(".active").attr("cor"));
        });

		 $(window).resize(function () { 
			sly.reload();
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
$( ".menu ul li" ).click(function() {
  	$( ".menu" ).removeClass( "open" );
  	$(this).addClass('active').siblings().removeClass('active');
  	$(".rcm_container").removeClass('rcm_1 rcm_2 rcm_3 show');

});


				
				






