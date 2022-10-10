$('.js-button-campaign').click(function() {
	// $('main').css('filter','blur(5px)');
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
	window.scrollTo(0, 0)
});

// $(document).mouseup(function(e) {
// 	var popup = $('.js-popup-campaign');
// 	if (e.target!=popup[0]&&popup.has(e.target).length ==0) {
// 		$('.js-overlay-campaign').fadeOut();
// 		$('main').css('filter','none');
// 	}
// });

$('.js-close-campaign').click(function() {
	$('.js-overlay-campaign').fadeOut();
})



$('.js-button-2-campaign').click(function() {
	// $('main').css('filter','blur(5px)');
	$('.js-overlay-2-campaign').fadeIn();
	$('.js-overlay-2-campaign').addClass('disabled');
	window.scrollTo(0, 0)
});

$('.js-close-2-campaign').click(function() {
	$('.js-overlay-2-campaign').fadeOut();
})