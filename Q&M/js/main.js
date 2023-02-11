$(document).ready(function() {

  /**
   * Author: Heather Corey
   * jQuery Simple Parallax Plugin
   *
   */
   
  (function($) {
   
      $.fn.parallax = function(options) {
   
          var windowHeight = $(window).height();
   
          // Establish default settings
          var settings = $.extend({
              speed        : 0.15
          }, options);
   
          // Iterate over each object in collection
          return this.each( function() {
   
            // Save a reference to the element
            var $this = $(this);
   
            // Set up Scroll Handler
            $(document).scroll(function(){
   
                  var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
   
            // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }
   
        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
   
                          // Apply the Y Background Position to Set the Parallax Effect
            $this.css('background-position', 'center ' + yBgPosition + 'px');
                  
            });
          });
      }
  }(jQuery));

//Loader
$(window).load(function() {
	$(".loader-overlay").fadeOut("slow");
})

//Counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('a[data-rel^=lightcase]').lightcase();

// Instantiate MixItUp
  $('.portfolio-items').mixItUp({
       animation: {
          duration: 300
      }
  });

// Carousels   
  $('.cl-client-carousel').owlCarousel({
      pagination:true,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
	  stopOnHover:true
  }); 
  
  $('.cl-logo-carousel').owlCarousel({
	  items : 6,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,3],
      stopOnHover:true,
      autoPlay:3000,
  });

    $(".header-carousel").owlCarousel({
        pagination:true,
        navigation : true, // Show next and prev buttons
        slideSpeed : 500,
        paginationSpeed : 500,
        singleItem:true,
        autoPlay:true,
    });

//Parallax Slider
$(document).ready(function(){
	dynamicHeight();
  
	$(window).resize(function(){
	   dynamicHeight();    
	});
	
	function dynamicHeight() {
	  var sliderHeight = $(window).height();
	  $('.full-slider-container, .full-slider-container .slide').css('height', sliderHeight);   
	}
	
	n=-1; 
	var totalSlides = $('#full-slider .slide').length;
	
	setInterval(function(){
	 
		changeSlide();
		function changeSlide() {
		n++;
				  
		$('#full-slider .slide').removeClass('active');
		$('#full-slider .slide').eq(n).addClass('active');
		
		console.log('n = '+n);
  
		 if(n==totalSlides){
		  $('#full-slider .slide').removeClass('active');    
		  $('#full-slider .slide').eq(0).addClass('active');
			  
		  n=0; 
  
		 }     
		  
	   }  
	  
	}, 5000);
	  
  });

// Parallax
$('.parallax-section').parallax({
          speed : .100
        });

// Header Changer on Scroll
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".header-home");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('header-home').addClass("header-default");
        } else {
            header.removeClass("header-default").addClass('header-home');
        }
    });
});

// Navigation
  $('.nav-container').onePageNav({
    scrollSpeed: 600,
    currentClass: 'current',
    changeHash: true,
    filter: ':not(.external)'
  });

  $('.fwidget').onePageNav({
    scrollSpeed: 600,
    currentClass: 'current',
    changeHash: true,
    filter: ':not(.external)'
  });

//Header Class Change on Resize
  var $window = $(window);

      // Function to handle changes to style classes based on window width
      function checkWidth() {
      if ($window.width() < 767) {
          $('#top-header').removeClass('header-home').addClass('header-default');
          };

      if ($window.width() >= 767) {
          $('#top-header').removeClass('header-default').addClass('header-home');
      }
  }

  // Execute on load
  checkWidth();

  // Bind event listener
      $(window).resize(checkWidth);

});