$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".page__menu-toogle").addClass("open");
    } else {
        $(".page__menu-toogle").removeClass("open");
    }
});


$(".page__menu-toogle").click(function(e) {
      e.preventDefault();
      $(".page__menu").toggleClass("is-visible");
      $(this).toggleClass("clicked");
      $(".mcch").toggleClass("colored");
    });

$(".scroll-next").click(function() {
      var cls = $(this).closest("section").next().offset().top + 25;
      $("html, body").animate({
       scrollTop: cls
     }, 750);
    });



jQuery(document).ready(function($){
  $('.pf-form .pf-email').keyup(function(event){  
    if(event.which!= 13) {
      $('.pf-form').removeClass('is-submitted').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    }
    var emailInput = $(this),
      insertedEmail = emailInput.val(),
      atPosition = insertedEmail.indexOf("@");
      dotPosition = insertedEmail.lastIndexOf(".");
      if (atPosition< 1 || dotPosition<atPosition+2 ) {
        $('.pf-form').removeClass('is-active').find('.pf-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
      } else {
        $('.pf-form').addClass('is-active');
      }
  });
  });



// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 5) {
//     $(".bg-zoom").addClass("scrolled");
//   } else {
//     $(".bg-zoom").removeClass("scrolled");
//   };
// });




// $(".home-services__item").hover(function() {
//   var a = $(this).data("bgsrc");
//   $(".bg-ser").fadeOut("slow", function () {
//   $(".bg-ser").css("background-image", "url(" + a + ")");
//   $(this).fadeIn(250);
//   });
// });

// var bg = $(".bg-full")
//     function resizeBackground() {
//       bg.height($(window).height());
//     }

//     $(window).resize(resizeBackground);
//     resizeBackground();

    

    // $(".callback").click(function(e) {
    //   e.preventDefault();
    //   $(".callback-form").toggleClass("is-visible");
    //   $(this).toggleClass("clicked");
    // });



var phoneInput = document.querySelector('#phoneNum')
phoneInput.addEventListener('keydown', function(event) {
   if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    var mask = '+38 (111) 111-11-11'; // Задаем маску

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i=currentLength; i<mask.length; i++) {
                if (mask[i] == '1') {
                    this.value = currentString + event.key;
                    break;
                }
                currentString += mask[i];
                }
            }
        }
    } 
});


var center = [50.487179, 30.522189];
$("#map").gmap3({
    action: "init",
    marker: {
        values: [ {
            latLng: [ 50.618103, 30.437373 ],
            data: '<div class="map__info">'+'<span class="map__info-title">PMD - Ukataine LLC</span>'+
            '<span><strong>Address:</strong> 17A, 1-st Travnya Prov, 17a, Novi Petrivtsi, 07354</span>'+
            '<span><strong>E-mail:</strong><a href="mailto:mail@pmdua.com">mail@mmdua.com</a></span>'+
            '<span><strong>Mob:</strong><a href="tel:+38050">+380507</a></span>'+
            '</div>',
            options: {
                icon: "assets/img/map-marker.png"
            }
        }  
        ],
        options: {
            draggable: false
        },

        events: {
            mouseover: function(a, b, c) {
                var d = $(this).gmap3("get"), e = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                });
                if (e) {
                    e.open(d, a);
                    e.setContent(c.data);
                } else $(this).gmap3({
                    infowindow: {
                        anchor: a,
                        options: {
                            content: c.data
                        }
                    }
                });
            },
            click: function() {
                var a = $(this).gmap3({
                    get: {
                        name: "infowindow"
                    }
                });
                if (a) a.close();
            }
        }
    },
    map: {
        options: {
            zoom: 10,
            center: center,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            scrollwheel: false,
            streetViewControl: true,
            draggable: true,
            styles:[
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                {
                    "hue": "#ff0000"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 50
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#ffffff"
                }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#353535"
                }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#246EB1"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#505050"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#808080"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#454545"
                }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                {
                    "hue": "#000000"
                },
                {
                    "saturation": 100
                },
                {
                    "lightness": -40
                },
                {
                    "invert_lightness": true
                },
                {
                    "gamma": 1.5
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "all",
                "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "saturation": "44"
                },
                {
                    "lightness": "-28"
                },
                {
                    "hue": "#cccccc"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "saturation": "-6"
                },
                {
                    "color": "#c27c7c"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "lightness": "8"
                },
                {
                    "color": "#ae5252"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "lightness": "5"
                },
                {
                    "color": "#3c3c3c"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#cccccc"
                },
                {
                    "weight": "3.55"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [
                {
                    "saturation": "-83"
                },
                {
                    "weight": "1.84"
                },
                {
                    "visibility": "on"
                },
                {
                    "gamma": "0.00"
                },
                {
                    "color": "#cccccc"
                },
                {
                    "lightness": "-6"
                }
                ]
            }

            ]
        }
    }
});
