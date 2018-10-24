$(document).ready(function(){
	var headerHeight = $('header').height();
	var browserHeight = $(window).height();

	function sliderHeight(){
		$(".slider").css('height', (browserHeight - headerHeight) + 'px');
	};
	sliderHeight();

/*HAMBURGER*/
    $('.hamburger').on('click', function(){
        if(!$('.hamburger').hasClass('is-active')) {
            $(this).addClass('is-active');
            $('nav').addClass('active');
            $('body').addClass('noScroll');
        } else {
            $(this).removeClass('is-active');
            $('nav').removeClass('active');
            $('body').removeClass('noScroll');
        }
    });

    /*MOBILE NAV*/
    $('body').on('click', 'nav.active ul li a', function(){
        $('nav').removeClass('active');
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('noScroll');
    });

	/*SLIDER*/
	$(function(){
		$('.slider img:gt(0)').hide();
		setInterval(function(){
			$('.slider :first-child').fadeOut(1000)
				.next('img').fadeIn(1000)
				.end().appendTo('.slider');},
		4000);
	});

	/*SCROLL*/
    smoothScroll.init({
        offset: 80,
        easing: 'easeOutCubic',
        speed: 2000
    });

	/*INTRO ARROW DOWN*/
	$('.slider-wrapper span').on('click', function(){
		console.log('in');
		$('html, body').animate({
			scrollTop: browserHeight - 138
		}, 1000)
	});

	/*ROOM HOVER INFO*/
	$('.rooms-item').hover(
		function(){
			$(this).find('.content').addClass('on');
		}, function(){
			$(this).find('.content').removeClass('on');
		}
	);

	// Galeria de fotos
	$('.picture').each( function() {
	    var $pic     = $(this),
	        getItems = function() {
	            var items = [];
	            $pic.find('a').each(function() {
	                var $href   = $(this).attr('href'),
	                    $size   = $(this).data('size').split('x'),
	                    $width  = $size[0],
	                    $height = $size[1];

	                var item = {
	                    src : $href,
	                    w   : $width,
	                    h   : $height
	                }

	                items.push(item);
	            });
	            return items;
	        }

	    var items = getItems();
		var $pswp = $('.pswp')[0];
		$pic.on('click', 'figure', function(event) {
		    event.preventDefault();

		    var $index = $(this).index();
		    var options = {
		        index: $index,
		        bgOpacity: 0.8,
		        showHideOpacity: true
		    }

		    // Initialize PhotoSwipe
		    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
		    lightBox.init();
		});
	});
});