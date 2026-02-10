
$( window ).on("load", function() {
  $(".preload").fadeOut(500, function() {
    // $("#main-content").fadeIn(1000);
  });
});


$(document).ready(function () {


  const typewriter = new Typewriter('.center-jumbotron-header', {
    cursor: null,
    loop: true,
    delay: 50
  });

  typewriter.typeString('Inspire Curiosity')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Discover Together')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Share Knowledge')
    .pauseFor(2500)
    .start();

  var swiper = new Swiper('.swiper-container', {
    effect: 'slide',
    slidesPerView: 2,
    spaceBetween: 120,
    centeredSlides: true,
    slidesPerGroup: 1,
    initialSlide: 1,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 180
      },

      // when window width is >= 480px

      480: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }

  });

  var swiperHexagons = new Swiper('.swiper-container-hexagons', {
    effect: 'slide',
    slidesPerView: 2,
    spaceBetween: 120,
    centeredSlides: true,
    slidesPerGroup: 1,
    initialSlide: 1,
    breakpoints: {

      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }

  });


  $('.image-box-container .image-box .content .visible-title').each((function (item) {
    const content = $(this).children('h4');
    const button = $(this).children('button');
    const parent = content.parent().parent();
    parent.css('max-height', content.height() + 32);

    parent.parent().hover(function () {
      parent.addClass('image-box-hovered');
    }, function () {
      parent.removeClass('image-box-hovered');
    });

    button.click(function () {
      parent.toggleClass('image-box-hovered');
    })
  }));

  if(location.hash === '#privacy-policy') {
    $('#privacyBtn').trigger('click');
  }
});

function fixImageBoxes() {
  $('.image-box-container .image-box .content .visible-title').each((function(item) {
    const content = $(this).children('h4');
    const parent = content.parent().parent();
    parent.css('max-height', content.height() + 32);
  }));
}

/* News Swiper */
let newsSwiper = null;
let initNewsSwiper = false;

function swiperNews() {

  if (!initNewsSwiper) {
    initNewsSwiper = true;
    newsSwiper = new Swiper('.news-swiper', {
      effect: 'slide',
      slidesPerView: 1,
      loopedSlides: 4,
      spaceBetween: 10,
      loop: true,
      disableOnInteraction:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 3
        }
      }
    });
  }

}



/* Swiper
**************************************************************/
var swiper= null;
var init = false;



/* Which media query
**************************************************************/
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 991px)');
  let desktop = window.matchMedia('(min-width: 992px)');

  // Enable (for mobile)
  if(!mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.school-wrapper', {
        effect: 'slide',
        slidesPerView: 4,
        loopedSlides: 8,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          1200: {
            slidesPerView: 5
          }
        }
      });
    }

  }

  // Disable (for tablet)
  else if(mobile.matches) {
    if(swiper) {
      swiper.destroy();
      init = false;
    }

  }
}

function initMobileNavigation() {
  $('.navbar-toggler').click(function (e) {
    $('body').toggleClass('hide-overflow');
    $(".header-social").toggleClass('d-none');
    $('.header-charactor img').toggleClass('z_index_99');
  });
  $('.navbar-collapse .navbar-nav li').each((function(item) {
    const content = $(this).children('a');
    content.click(function(e) {
      $('.navbar-collapse').collapse('hide');
      $('body').toggleClass('hide-overflow');
      $(".header-social").toggleClass('d-none');
      $('.header-charactor img').toggleClass('z_index_99');
    })
  }));

}

function initDesktopNavigation() {
  $(".nav-toggler-desktop").click(function (e) {
    e.preventDefault();
    $(".navigation-desktop").toggleClass('show');
    $('.navigation-desktop .navbar-nav li').each((function(item) {
      const content = $(this).children('a');
      content.click(function(e) {
        $('.navigation-desktop').removeClass('show');
      })
    }));
  })
}

$("#contact-us form").on('submit', function (e) {
  e.preventDefault();
  const email = $("#contact-us input[name='email']").val();
  const name = $("#contact-us input[name='name']").val();
  const message = $("#contact-us textarea[name='message']").val();
  if(email !== "" && name !== "" && message !== "") {
    sendEmail(name,email,message);
  }
});


function sendEmail(_name,_email,_message) {

  $("#contact-us button").attr('disabled',true);

  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'fKGqoiZJ9KYKzdEdaIK7Eg',
      'message': {
        'from_email': 'contactform@kiwrious.com',
        'to': [{
          'email': 'hello@kiwrious.com', // get email from form
          'name': 'Dulaj', // get name from form
          'type': 'to'
        }
        ],
        "headers": {
          "Reply-To": _email,
        },
        // optional merge variables. must also be setup on the list management side of mandrill
        'autotext': 'true',
        'subject': `Message from ${_name}`,
        'text': _message,
        'track_opens': true,
        'track_clicks': true,
      }
    }
  }).done(function(response) {
    $('#contact-us').modal('toggle');
    $("#contact-us button").attr('disabled',false);
  })

}


// console.log(newsVideo[0]);

function initVideo() {
  const playButton = $(".video-thumb button");
  const video = $("#video-sensors");
  const thumbOverlay = $(".video-thumb .thumb-overlay");
  const playButtonLabel = $(".video-thumb .play-btn-label");
  video[0].onended = function() {
    playButton.show();
    thumbOverlay.show();
    playButtonLabel.show();

  };



  video[0].onpause = function() {
    playButton.show();
    thumbOverlay.show();
    playButtonLabel.show();

  };

  playButton.on('click', function (e) {
    e.preventDefault();
    video[0].play();
    playButton.hide();
    thumbOverlay.hide();
    playButtonLabel.hide();
  });

  video.on('click', function (e) {
    e.preventDefault();
    if(!video[0].paused) {
      video[0].pause();
      playButton.show();
      thumbOverlay.show();
      playButtonLabel.show();
    }else {
      video[0].play();
      playButton.hide();
      thumbOverlay.hide();
      playButtonLabel.hide();
    }


  });

}


var textSlider = null;

/* On Load

**************************************************************/
window.addEventListener('load', function() {
  // sendEmail();
  initVideo();
  swiperMode();
  fixImageBoxes();
  initMobileNavigation();
  swiperNews();
  initDesktopNavigation();
  if(window.location.hash) {
    var hash = window.location.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500);
  }

  textSlider = $('.text-slider-wrap').bxSlider({
    controls: false,
    auto: true
  });


  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('news-video', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(event) {
   console.log("READY");
  }

  function onPlayerStateChange(event) {
    alert("Changed");
    console.log(event.data);
  }
  onYouTubeIframeAPIReady();


});


/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  swiperMode();
  fixImageBoxes();
  swiperNews();
  if(textSlider) {
    textSlider.reloadSlider();
  }

});

