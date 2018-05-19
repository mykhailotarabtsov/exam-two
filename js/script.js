$(document).ready(function(){
  $('.slider__wrap').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		prevArrow: ".prev__button",
		nextArrow: ".next__button"
	});

	$('.wrap__slider-two').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		prevArrow: ".prev__button-bottom",
		nextArrow: ".next__button-bottom"
	});

});