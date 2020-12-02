var defaults = {
	
	events: () => {
		$('.js-popup-show').click(function(){
			let popup = $(this).attr('href');
			
			if ( $(this).data('modal') ) {
				popup = $(this).data('modal');
			}
			
			$('.js-popup'+popup).addClass('is-active');
			defaults.noSrcroll();
			
			return false;
		});
		
		$('.js-popup-close').click(function(){
			$('.js-popup').removeClass('is-active');
			defaults.activeSrcroll();
		});
	},

	noSrcroll: () => {
		$('html').addClass('js-lock');	
	},
	
	activeSrcroll: () => {
		$('html').removeClass('js-lock');	
	},
	
	selectToggle: (e) => {
		
		$(e.currentTarget).closest('.js-select').toggleClass('is-active');
		
	},
	
	toggleModal: (e) => {
		
		let modalName = $(e.currentTarget).data('modal-name');
		
		$(e.currentTarget).toggleClass('is-active');
		
		$(modalName).toggleClass('is-active');
		
	},

	init: () => {

		defaults.events();
		
		$(document).on('click', '.js-select-toggle', defaults.selectToggle);
		
		$(document).on('click', '.js-modal-btn', defaults.toggleModal);

	}
}

export { defaults }