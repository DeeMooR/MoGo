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


$(document).ready(function() {
	$('.we-do__button-1').click(function(event) {
		$('.we-do__button-1, .we-do__invisible-1').toggleClass('active');
	});
    $('.we-do__button-2').click(function(event) {
		$('.we-do__button-2, .we-do__invisible-2').toggleClass('active');
	});
    $('.we-do__button-3').click(function(event) {
		$('.we-do__button-3, .we-do__invisible-3').toggleClass('active');
	});
});

const elements = document.getElementsByClassName('about__item');
if (window.innerWidth <= 575.98) {
    for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add('disabled');
    }
}

$(function(){
    $('.we-do__photo').height($('.we-do__photo').width()/(570/483));
    $(window).resize(function(){
      $('.we-do__photo').height($('.we-do__photo').width()/(570/483));
    });

    $('.we-do__list').height($('.we-do__list').width()/(570/483));
    $(window).resize(function(){
      $('.we-do__list').height($('.we-do__list').width()/(570/483));
    });
});
$(function(){
    if (window.innerWidth <= 767.98) {
        $('.we-do__photo').height($('.we-do__photo').width()/(1.6));
        $(window).resize(function(){
        $('.we-do__photo').height($('.we-do__photo').width()/(1.6));
        });

        $('.we-do__list').height($('.we-do__list').width()/(1.6));
        $(window).resize(function(){
        $('.we-do__list').height($('.we-do__list').width()/(1.6));
        });
    }
});
$(function(){
    if (window.innerWidth <= 459.98) {
        $('.we-do__photo').height($('.we-do__photo').width()/(288/142));
        $(window).resize(function(){
        $('.we-do__photo').height($('.we-do__photo').width()/(288/142));
        });

        $('.we-do__list').height($('.we-do__list').width()/(288/142));
        $(window).resize(function(){
        $('.we-do__list').height($('.we-do__list').width()/(288/142));
        });
    }
});