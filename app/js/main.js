$(function () {
  $('.product__inner-slider').slick({
    dots: false,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    arrow: true,
    prevArrow: '<button class="arrow prev-arrow"><span class="icon-angle-left"></span></button>',
    nextArrow: '<button class="arrow next-arrow"><span class="icon-angle-right"></span></button>'
  });

  $('.product__carousel-contents').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 600,
    prevArrow: '<button class="arrow prev-arrow"><span class="icon-angle-left"></span></button>',
    nextArrow: '<button class="arrow next-arrow"><span class="icon-angle-right"></span></button>'
  });
});