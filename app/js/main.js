$(function() {
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
});