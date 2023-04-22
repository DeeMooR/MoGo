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

const elements = document.getElementsByClassName('about__item');
if (window.innerWidth <= 575.98) {
    for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('disabled');
    }
}