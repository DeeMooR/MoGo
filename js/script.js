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
    if (window.innerWidth >= 768) {
        $('.we-do__photo').height($('.we-do__photo').width()/(570/483));
        $(window).resize(function(){
        $('.we-do__photo').height($('.we-do__photo').width()/(570/483));
        });

        $('.we-do__list').height($('.we-do__list').width()/(570/483));
        $(window).resize(function(){
        $('.we-do__list').height($('.we-do__list').width()/(570/483));
        });

        $('.our-work__grid').height($('.our-work__grid').width()/(2));
        $(window).resize(function(){
        $('.our-work__grid').height($('.our-work__grid').width()/(2));
    });
    }

    if (window.innerWidth <= 767.98) {
        $('.we-do__photo').height($('.we-do__photo').width()/(1.6));
        $(window).resize(function(){
        $('.we-do__photo').height($('.we-do__photo').width()/(1.6));
        });

        $('.we-do__visible').height($('.we-do__visible').width()/(5));
        $(window).resize(function(){
        $('.we-do__visible').height($('.we-do__visible').width()/(5));
        });

        $('.we-do__invisible').height($('.we-do__invisible').width()/(2.8));
        $(window).resize(function(){
        $('.we-do__invisible').height($('.we-do__invisible').width()/(2.8));
        });

        $('.our-work__grid').height($('.our-work__grid').width()/(1));
        $(window).resize(function(){
        $('.our-work__grid').height($('.our-work__grid').width()/(1));
    });
    }

    if (window.innerWidth <= 459.98) {
        $('.we-do__photo').height($('.we-do__photo').width()/(288/142));
        $(window).resize(function(){
        $('.we-do__photo').height($('.we-do__photo').width()/(288/142));
        });

        $('.our-work__grid').height($('.our-work__grid').width()/(2/5));
        $(window).resize(function(){
        $('.our-work__grid').height($('.our-work__grid').width()/(2/5));
        });
    }
    if (window.innerWidth <= 399.98) {
        $('.we-do__visible').height($('.we-do__visible').width()/(288/78));
        $(window).resize(function(){
        $('.we-do__visible').height($('.we-do__visible').width()/(288/78));
        });

        $('.we-do__invisible').height($('.we-do__invisible').width()/(288/138));
        $(window).resize(function(){
        $('.we-do__invisible').height($('.we-do__invisible').width()/(288/138));
        });
    }

    $('.item-slider1__icon').height($('.item-slider1__icon').width()/(1.0));
    $(window).resize(function(){
    $('.item-slider1__icon').height($('.item-slider1__icon').width()/(1.0));
    });
});

// Инициализируем Swiper
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    initialSlide: 1,
});