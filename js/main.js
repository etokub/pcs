 // $(window).scroll(function() {
  //   var scroll = $(window).scrollTop();
  //     if (scroll >= 25) {
  //       $(".scrollfixed").addClass("to-down");
  //     } else {
  //       $(".scrollfixed").removeClass("to-down");
  //     }
  // });
// $( ".mobile-nav__toggle").on( "click", function() {
//   $(".mobile-nav").toggleClass("opened");
// });

// });
  
$(document).ready(function() {
	"use strict";

 $(window).scroll(function() {
    var scroll = $(window).scrollTop();
      if (scroll >= 25) {
        $(".nav").addClass("to-down");
      } else {
        $(".nav").removeClass("to-down");
      }
  });	

$( ".nav__toogle").on( "click", function() {
  $(".nav__list").toggleClass("is-open");
  $(".nav__toogle").toggleClass("clicked");
});


$(function() {
  $('.address__content').delegate('.address__controll:not(.current)', 'click', function() {
    $(this).addClass('current').siblings().removeClass('current')
    .parents('.address__content').find('.address__container').hide().eq($(this).index()).fadeIn(850);
  })
});

$(".show-hidden-info").on("click", function() {
        $(this).toggleClass("vhi");
        $(this).closest(".service__item").find(".hidden-info").slideToggle(250);
		  return false;
});

var swiper1 = new Swiper('.customer__slider', {
      slidesPerView: 4,
      spaceBetween: 15,
       navigation: {
        nextEl: '.customer__slider__btn-next',
        prevEl: '.customer__slider__btn-prev',
      },
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        }
      }
    });
 

  var swiper2 = new Swiper('.address-1', {
      navigation: {
        nextEl: '.address-1__next',
        prevEl: '.address-1__prev',
      },
    });

   var swiper3 = new Swiper('.address-2', {
      navigation: {
        nextEl: '.address-2__next',
        prevEl: '.address-2__prev',
      },
    });

  // new WOW().init();
$( ".address__controll").on( "click", function() {
	  reinitSwiper(swiper3);
 });

function reinitSwiper(swiper) {
    setTimeout(function () {
        swiper.update();       
    }, 100);
}

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  if (isMobile.any()) {

  }
  else {
    $.Scrollax();
  }




});


