$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.header__item').click(function(event) {
        if (window.innerWidth <= 767.98) {
            $('.header__burger,.header__menu').toggleClass('active');
		    $('body').toggleClass('lock');
        };
	});
});