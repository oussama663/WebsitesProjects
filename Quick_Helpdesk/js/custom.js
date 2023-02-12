/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

   /* ==============================================
    Fixed menu
    =============================================== */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header_style_01').addClass('fixed-menu');
		} else {
			$('.header_style_01').removeClass('fixed-menu');
		}
	});



	
	$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});
    $(function() {
   $("a").click(function() {
      // remove classes from all
      $("a").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});
   /* ==============================================
		Scroll to top  
	============================================== */
		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
	
	/* ==============================================
     FUN FACTS -->
     =============================================== */
	
	$(".slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 700
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

    /* ==============================================
     VIDEO PLAYER -->
     =============================================== */

var min_w = 300; // minimum video width allowed
var vid_w_orig;  // original video dimensions
var vid_h_orig;

jQuery(function() { // runs after DOM has loaded
    
    vid_w_orig = parseInt(jQuery('video').attr('width'));
    vid_h_orig = parseInt(jQuery('video').attr('height'));
    $('#debug').append("<p>DOM loaded</p>");
    
    jQuery(window).resize(function () { resizeToCover(); });
    jQuery(window).trigger('resize');
});

function resizeToCover() {
    
    // set the video viewport to the window size
    jQuery('#vid').width(jQuery(window).width());
    jQuery('#vid').height(jQuery(window).height());

    // use largest scale factor of horizontal/vertical
    var scale_h = jQuery(window).width() / vid_w_orig;
    var scale_v = jQuery(window).height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    // don't allow scaled width < minimum video width
    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    // now scale the video
    jQuery('video').width(scale * vid_w_orig);
    jQuery('video').height(scale * vid_h_orig);
    // and center it by scrolling the video viewport
    jQuery('#vid').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
    jQuery('#vid').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
};

    /* ==============================================
     Fade Slogan Text -->
     =============================================== */

setInterval(function () {
        if ($('.bannerCategory.active').length) {
            var listItem = $('.bannerCategory.active');
            var next = $(".bannerCategory").index(listItem) + 1 < $('.bannerCategory').length ? $(".bannerCategory").index(listItem) + 1 : 0;
            $('.bannerCategory').removeClass('active');
            $('.bannerCategory').eq(next).addClass('active');
        } else {
            $('.bannerCategory').first().addClass('active');
        }
    }, 1500);

/* ==============================================
     PRESENTATION SLIDER -->
     =============================================== */


  $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:2,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }
        }
      });

/* ==============================================
     MAP -->
     =============================================== */

const paths = document.querySelectorAll('path')
const cityLabel = document.querySelector('.city')
let city = ''

for(let path of paths){
  // hover start part
  path.addEventListener('mouseover', (e) => {
    city = path.dataset.city
    if(city){
      cityLabel.textContent = city
      cityLabel.classList.add('show')
    }
    path.classList.add('show')  
  })
  
  // click part
  path.addEventListener('click', (e) => {
    console.log(e.target)
  })
  
  // hover end part
  path.addEventListener('mouseleave', (e) => {
    cityLabel.classList.remove('show')
    path.classList.remove('show')
  })
}

/* ==============================================
     Slider -->
     =============================================== */


    var swiper = new Swiper('.carousel-gallery .swiper-container', {
      effect: 'slide',
      speed: 900,
      slidesPerView: 4,
      spaceBetween: 20,
      simulateTouch: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: '.carousel-gallery .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },
        // when window width is <= 480px
        425: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    }); /*http://idangero.us/swiper/api/*/
  
// Video Modal

$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="uploads/helpvid.mp4" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

})(jQuery);