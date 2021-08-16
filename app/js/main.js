$(function () {

  $('.product__inner-slider').slick({
    prevArrow: '<button class="arrow prev-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="arrow next-arrow"><span class="lnr lnr-chevron-right"></span></button>',
  });

  $('.top__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    prevArrow: '<button class="arrow prev-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="arrow next-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
    ]
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


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    // centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button class="arrow prev-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="arrow next-arrow"><span class="lnr lnr-chevron-right"></span></button>'
  });

  $('.more-slider-box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    speed: 700,
    prevArrow: '<button class="arrow next-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    nextArrow: '<button class="arrow prev-arrow"><span class="lnr lnr-chevron-left"></span></button>'
  });

  $('.aside__category-list li').on('click', function () {
    $('.aside__options-menu').slideDown();
    $('.aside__category-list li').removeClass('actives');
    $(this).addClass('actives');
  });

  $('.options__menu-list li').on('click', function () {
    $('.options__menu-list li').removeClass('actives');
    $(this).addClass('actives');
  });

  $('.options__size-chart span').on('click', function () {
    $('.options__size-chart span').removeClass('active');
    $(this).addClass('active');
  });

  $('.icon-th-list').on('click', function () {
    $('.icon-th-large').removeClass('active');
    $('.icon-th-list').addClass('active');
    $('.product__item').addClass('active');
  });

  $('.icon-th-large').on('click', function () {
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
    $('.product__item').removeClass('active');
  });

  $('.aside-tags__box div').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.title-category').on('click', function () {
    $(this).next().slideToggle();
  });

  $('.title-menu').on('click',function() {
    $(this).next().slideToggle();
    $(this).children('.lnr-chevron-down').toggleClass('active');
  });

  $('.aside-tags__title').on('click', function() {
    $('.aside-tags__contents').slideToggle();
    $(this).children('.lnr-chevron-down').toggleClass('active');
  });




  $('.aside__menu-burger').on('click', function () {
    $('.options__menu-list').toggleClass('active');
    $('span:nth-child(1)').toggleClass('first');
    $('span:nth-child(2)').toggleClass('middle');
    $('span:nth-child(3)').toggleClass('last');
  });

  $('.more__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });


  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });

  $("#rateYo").rateYo({
    rating: 3.6,
    ratedFill: "#000",
    readOnly: true,
    spacing: '5px',
    starWidth: "15px"
  });



  new WOW().init();
});




//сделать фде для изображений
//минифицировать изображения 
//повторяющиееся цвета в vars 
//анимация
// поменять текст везде на строчной
// убрать прыжки во время клика по элементам
// добавить сортировку по колличеству элементов, по id
//заанимировать теги по клику. Можно выбрать несколько сразу и под них будут сортироваться продукты
//подписать alt у img сделать счетчик колличества установить максимальное колл дя input добавить name input
//можно добавлять продукты с помощью классов плюс удалять их из корзины
//пофиксить кнопки все, чтобы были одинаковы шрифты по размеру