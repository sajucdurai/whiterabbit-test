
(function($) {
    "use strict";

	$(window).on('load', function() {
		/*------------------
			Preloder
		--------------------*/
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
		
	});
	
    jQuery(document).ready(function($) {

		  // slider
		  $('.tablet-carousel').owlCarousel({
			items: 4,
			loop: true,
			nav: true,
			dots:false,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				500:{
					items:2
				},
				700:{
					items:3
				},
				1000:{
					items:4
				}
			}
		  });
	
	});

	// scroll top
	$(function () {
		var offset = 200,
			offset_opacity = 1200,
			scroll_top_duration = 900,
			$back_to_top = jQuery('.scrollup');	
		$back_to_top.on('click', function(event){
			event.preventDefault();
			jQuery('body,html').animate({
				scrollTop: 0 ,
				}, scroll_top_duration
			);
		});
	
			});
	
}(jQuery));

