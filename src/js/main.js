// jQuery
$(window).load(function() { // makes sure the whole site is loaded
                $('#status').fadeOut(); // will first fade out the loading animation
                $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
                $('body').delay(350).css({'overflow':'visible'});
            });

//$( document ).ready(function() {
//	var $container = jQuery('#masonry-grid');
//	// initialize
//	$container.masonry({
//        itemSelector: '.grid-item',
//        columnWidth: 1
//	});
//});


$(document).ready(function(){
        $('.about').each(function(){              
            var highestBox = 0;
            $('.equal_height .box', this).each(function(){           
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });            
            $('.equal_height .box',this).height(highestBox);  
    });    
});


$(document).ready(function(){
    wow = new WOW(
              {
                animateClass: 'animated',
                offset:       100,
                callback:     function(box) {
                  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
                }
              }
            );
            wow.init();
    
});


jQuery(document).ready(function( $ ) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
            });

window.onload = function () {
            var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "saturation": 10
            },
            {
                "lightness": 30
            },
            {
                "gamma": 0.5
            },
            {
                "hue": "#435158"
            }
        ]
    }
];

        var options = {
            mapTypeControlOptions: {
                mapTypeIds: ['Styled']
            },
            center: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
            zoom: 16,
            disableDefaultUI: true,	
            mapTypeId: 'Styled'
        };
        var div = document.getElementById('map');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
        }


jQuery(function(){jQuery("img").load(function(){jQuery("#masonry-grid").masonry()}),jQuery("#masonry-grid").masonry({itemSelector:".grid-item",isResizable:"true"})})

 $(document).ready(function() {
                $(".fancybox").fancybox();
            });


$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});




$(document).ready(function() { 
    
    
//      $("#slider-top").owlCarousel({
//        navigation : true,
//        slideSpeed : 300,
//        paginationSpeed : 400,
//        singleItem:true
//      });
  
    $("#slider-testimonials").owlCarousel({     
      //navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
  }); 
    
}); 




    $(document).ready(function() {
     
      var time = 7; // time in seconds
     
      var $progressBar,
          $bar, 
          $elem, 
          isPause, 
          tick,
          percentTime;
     
        //Init the carousel
        $("#slider-top").owlCarousel({
          slideSpeed : 500,
          paginationSpeed : 500,
          singleItem : true,
          afterInit : progressBar,
          afterMove : moved,
          startDragging : pauseOnDragging
        });
     
        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem){
          $elem = elem;
          //build progress bar elements
          buildProgressBar();
          //start counting
          start();
        }
     
        //create div#progressBar and div#bar then prepend to $("#owl-demo")
        function buildProgressBar(){
          $progressBar = $("<div>",{
            id:"progressBar"
          });
          $bar = $("<div>",{
            id:"bar"
          });
          $progressBar.append($bar).prependTo($elem);
        }
     
        function start() {
          //reset timer
          percentTime = 0;
          isPause = false;
          //run interval every 0.01 second
          tick = setInterval(interval, 10);
        };
     
        function interval() {
          if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
               width: percentTime+"%"
             });
            //if percentTime is equal or greater than 100
            if(percentTime >= 100){
              //slide to next item 
              $elem.trigger('owl.next')
            }
          }
        }
     
        //pause while dragging 
        function pauseOnDragging(){
          isPause = true;
        }
     
        //moved callback
        function moved(){
          //clear interval
          clearTimeout(tick);
          //start again
          start();
        }
     
        //uncomment this to make pause on mouseover 
        // $elem.on('mouseover',function(){
        //   isPause = true;
        // })
        // $elem.on('mouseout',function(){
        //   isPause = false;
        // })
     
    });


