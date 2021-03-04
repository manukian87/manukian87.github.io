$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
            
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
    
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }

    
    ]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

      });
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal
 
    
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  $('.button_mini').each(function (i) {
   $(this).on('click', function () {
     $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
     $('.overlay, #order').fadeIn('slow');
   });
  });
  
  function ValideForms(form) {
    $(form).validate({
  rules: {
    name: {
      required: true,
      minLength: 2
  },
    phone: {
      required: true,
      phone: true
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: "Пожалуйста введите Ваше имя",
      minLength: jQuery.validator.format("Введите {0} символа!")
    },
    phone: {
      required: "Введите номер телефона",
    },
    email: {
      required: "Введите Ваш электронный адресс",
      email: "Введите эл.адрес в формате name@domain.com"
    }
  },
  });
  };
  ValideForms('#consultation-form');
  ValideForms('#consultation form');
  ValideForms('#order form');

  $('[name=phone]').mask("+7(999) 999-9999");

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialise()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });
  //scroll  pageup
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
    //animacia
   $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
   });
   new WOW().init();

});