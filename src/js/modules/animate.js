var animate = {

	animated: () => {
		var viewport_height = $(window).innerHeight();
		var scroll_top = $(window).scrollTop();
		$(".js-animated").each(function(){
			var animate_pos = $(this).offset().top;
			var animate_offset = viewport_height/3;
			var animate_delay = $(this).data("animate-delay");
			var animate = $(this).data("animate-class");
			
			if ( $(window).innerWidth() <= viewport_height ) {
				animate_offset = viewport_height/4;
			}
			
			var win_scroll = scroll_top + viewport_height - animate_offset;
			
			$(this).css("transition-delay",animate_delay+"ms");
			
			if ( win_scroll >= animate_pos ) {
				$(this).addClass(animate);
			} else {
				//$(this).removeClass(animate);
			}
		});
	},
	
	parallax: () => {
		var viewport_height = $(window).innerHeight();
		var viewport_width = $(window).innerWidth();
		var scroll_top = $(window).scrollTop();

		$(".js-parallax").each(function(){
			var paralax_pos = $(this).offset().top;
			var paralax_side = $(this).data("parallax-side");
			var paralax_step = $(this).data("parallax-step");
			if ( scroll_top > viewport_height ) {
				
			} else {
				
				if ( paralax_side == 'bottom') {
					$(this).attr("style","transform: translateY(" + (-scroll_top - paralax_pos )/paralax_step + "px)" );
				} 
				if ( paralax_side == 'left') {
					$(this).attr("style","transform: translateX(" + (scroll_top - paralax_pos + viewport_height )/paralax_step + "px)" );
					if ( viewport_width < viewport_height ) {
						$(this).attr("style","transform: translateX(" + (scroll_top - paralax_pos + ( viewport_height/2 ) )/paralax_step + "px)" );
					}
				} else {
					$(this).attr("style","transform: translateY(" + (scroll_top - paralax_pos )/paralax_step + "px)" );
				}
				
			}
		});
		
	},
	
	scrollTo: (e) => {
		var attrHref = $(e.currentTarget).attr("href");
		var dataHref = $(e.currentTarget).data("href");
		var constTop = 130;
		
		if ( dataHref ) {
			attrHref = dataHref;
		}
		
		if ( $(window).innerWidth() < 581 ) {
			constTop = 105;
		}
		
		$("html, body").animate({
			scrollTop: $(attrHref).offset().top - constTop + "px"
		}, {
			duration: 1000
		});
		
		return false;
	},

	init: () => {
		
		$(window).on('load scroll', function(){
			animate.animated();
			animate.parallax();
		});
		
		$(document).on('click', '.js-scroll-to', animate.scrollTo);
		
		$(window).on('load scroll', function(){
			
			$('.header').each(function(){
				
				if( $(window).scrollTop() > 30 ) {
					
					$('.header').addClass('is-scroll');

				} else {
					
					$('.header').removeClass('is-scroll');
					
				}
			});
			
		});
		
		/*
		$(document).ready(function(){
			$('html').addClass('js-lock');
		});*/
		
		$(window).on('load', function(){

			$('.js-load').each(function(){

				$(this).addClass('active');
				
				if ( $(window).innerWidth() < 581 ) {
					$("html, body").animate({
						scrollTop: 0
					}, {
						duration: 0
					});
				}

				setTimeout(function(){

					$('.js-load').removeClass('is-animate js-load active');

					$('html').removeClass('js-lock');

					$('.js-ball').addClass('is-parallax js-parallax-scroll');


				}, 3010);

			});

		});
		
		
		if ( $(window).innerWidth() < 860 ) {
			
			$('.header__link').click(function(){
				$('.header__burger').click();
			});
			
		}
		
		function parallaxScroll() {
			$('.js-parallax-scroll').each(function(){
				
				var top = $(window).scrollTop();
				var step = $(this).data("parallax-step");
				step = step * 0.1;

				$(this).attr("style", "transform: translateY(" + ( -top * step ) + "px");
				
			});
		}

		$(window).scroll(function() {
			parallaxScroll();
		});

	}
}

export { animate }