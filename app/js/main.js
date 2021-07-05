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
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      960: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });

  new WOW().init();
});