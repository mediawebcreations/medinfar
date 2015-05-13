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
			releaseSwing: false,
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
          

        sly.init(); 


		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toCenter($(this).attr('data-item'));
		});

		 var aparecerfoto = 0;

		$( "#acne" ).click(function() {
			if(aparecerfoto == 0) {
				$( "#acne .item1" ).addClass( "animated fadeIn" );
				$( "#acne .item1" ).removeClass( "imgs-hide" );
				aparecerfoto ++;
			} else if (aparecerfoto == 1) {
				$( "#acne .item2" ).addClass( "animated fadeIn" );
				$( "#acne .item2" ).removeClass( "imgs-hide" );
				aparecerfoto ++;
			} else if (aparecerfoto == 2){
				$( "#acne .item3" ).addClass( "animated fadeIn" );
				$( "#acne .item3" ).removeClass( "imgs-hide" );
				aparecerfoto ++;
			}


		});

		 sly.on('change', function (eventName) {
                
                //console.log(eventName); // 
                //console.log(this.rel.activeItem);
                console.log($(".frame .active").attr("cor"));
                // change color svg
                $(".menu_btn svg path").attr("fill", $(".frame .active").attr("cor"));
                $(".menu_btn_close svg path").attr("fill", $(".frame .active").attr("cor"));
                $("#provivax img#splash").removeClass( "animated bounceInDown" );
                $("#karez img#caixa-karez").removeClass( "animated bounceInDown" );
                $("#karez-2 img#caixa-karez2").removeClass( "animated bounceInDown" );
               	var src = "img/pages/app2/tricovivax/capa/25anos.gif";
                $("#gif_intro").attr("src", src);
                var src2 = "img/pages/app2/tricovivax/fecho3/300k.gif";
                 $("#gif_final").attr("src", src2);	

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

function show_rcm_trico(){
	document.getElementById("rcm_trico").className += " rcm_1 show";
}
function hide_rcm_trico(){
	document.getElementById("rcm_trico").className = "rcm_container";
}
function show_rcm_verru(){
	document.getElementById("rcm_verru").className += " rcm_2 show";
}
function hide_rcm_verru(){
	document.getElementById("rcm_verru").className = "rcm_container";
}
$( ".menu_btn_close" ).click(function() {
    window.close();   // Closes the new window
});

$( ".menu ul li" ).click(function() {
  	$( ".menu" ).removeClass( "open" );
  	$(this).addClass('active').siblings().removeClass('active');
  	$(".rcm_container").removeClass('rcm_1 rcm_2 show');

});

$("li#provivax").click(function(){
	$("#splash").addClass('animated bounceInDown');
});
$("li#karez").click(function(){
	$("#caixa-karez").addClass('animated bounceInDown');
});
$("li#karez-2").click(function(){
	$("#caixa-karez2").addClass('animated bounceInDown');
});