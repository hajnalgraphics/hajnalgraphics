function mobileMenu() {
    if ($(this).width() < 1440) {
        $('.menu-button').toggleClass('active');
        $('.navbar').toggleClass('opened');
    }
}

$(window).resize(function () {
    if ($(this).width() >= 1440) {
        $('.menu-button').removeClass('active');
        $('.navbar').removeClass('opened');
    }
});

var slides = $('.hero__slider');
var squares = $('.hero__square');
var slideIndex = 0;
var n = slides.length;

function heroSlider() {
    for (i = 0; i < n; i++) {
        slides[i].style.display = "none";
        squares[i].classList.remove('active');
    }

    if (slideIndex == n) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    squares[slideIndex].classList.add('active');
    slideIndex = slideIndex + 1;
    setTimeout(heroSlider, 4000);
}

function characterCounter() {
    var length = $('#textarea').val().length;
    $('.character-counter').html('maxamimum 200 karakter - ' + (200 - length) + ' maradt.');
}

function labelPosition(input) {
    $(input).siblings('.footer__input-label').css({'top': '20px','transition' : '0.2s ease all'});
    $(input).siblings('.footer__input-label').css({'top': '20px','transition' : '0.2s ease all'});
    if(input.value !== '') {
        $(input).siblings('.footer__input-label').css('top', '-20px');
    }
}

$(document).ready(heroSlider());

