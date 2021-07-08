/*-----------------------------------------------------------
* Template Name    : Uone | Bootstrap 4 personal, portfolio and resume
* Author           : Retrinagroup
* Version          : 1.0.0
* Created          : Dec 2019
* File Description : Main js file of the template
*------------------------------------------------------------
*/

// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {

    "use strict";
    colorScheme();
    menuToggler();
    sliderOwlCarousel();
    typedJS();
    popUpVideo();
    skills();
    countup();
    portfolioPopup();
    validateEmail();
    sendEmail();
    $('.owl-item.active .hero-slide').addClass('zoom');

});

$window.on("load", (function() {
    $("#overlayer").delay(500).fadeOut('slow');
    $(".loader").delay(1000).fadeOut('slow');
    pagePilling();
    portfolioIsotop();
}));

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

/*-------------------------
       Page Pilling
-------------------------*/
function pagePilling(){
    $('#pagepiling').pagepiling({
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff','#fff', '#fff' ,'#fff' ,'#fff'],
        anchors: ['hero', 'about', 'resume', 'services', 'portfolio', 'testimonial', 'blog'],
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        navigation: {
            'position': 'right',
            'tooltips': ['HOME', 'ABOUT ME', 'RESUME', 'SERVICES', 'PORTFOLIO', 'CLIENT', 'BLOG', 'CONTACT', 'FOOTER']
        },
        loopBottom: true,
        loopTop: true,
        scrollingSpeed: 700,
        easing: 'swing',
        css3: true,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        afterRender: function() {},
        afterLoad: function(anchorLink, index) {}
    });
}


/*-------------------------
        Color Scheme
-------------------------*/
function colorScheme(){
    var $darkLogo = $('.dark-logo');
    $('.color-scheme').click(function() {
        $("body").toggleClass('uone-dark');
        $('.section').toggleClass('bg-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}
/*-------------------------
    MENU TOGGLER
-------------------------*/
function menuToggler() {

    "use strict";
    $(".overlay-menu-toggler").click(function(){
        $(".overlay-menu").addClass("show");
    });
    $(".overlay-menu").click(function(){
        $(this).removeClass("show");
    });

}

/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel(){
    $('.hero .owl-carousel').owlCarousel({
        loop:true,
        items: 1,
        nav: false,
        dots: false,
        autoplay:true,
        touchDrag: true,
        smartSpeed: 5000,
        animateOut: 'fadeOut',
        //autoplayHoverPause: true,
    });
    $('#hero-slider').on("translate.owl.carousel", function(){
        setTimeout(function(){
            $('.hero-slide').removeClass("zoom");
        }, 1000)
	});
	$('#hero-slider').on("translated.owl.carousel", function(){
		$('.owl-item.active .hero-slide').addClass("zoom");
    });
}
/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {

    "use strict";

    var options = {
        strings: $(".element").attr('data-elements').split(','),
        typeSpeed: 100,
        backDelay: 3000,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed(".element", options);
}

/*------------------------------
  MAGNIFIC POPUP JS FOR VIDEO
------------------------------*/
function popUpVideo(){

    "use strict";

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/*-------------------------
            Skills
-------------------------*/
function skills() {

    "use strict";
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
}

/*-------------------------
            Count up
  -------------------------*/
function countup() {

    "use strict";

    $('.timer').countTo();
    $('.count-number').removeClass('timer');
}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {

    "use strict";

    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });
    }
}

/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {

    "use strict";

    var $container = $('.portfolio-items');
    var $filter = $('#portfolio-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').on("click",function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
}

/*-------------------------
    Testimonial CAROUSEL JS
-------------------------*/
$(".testimonial .owl-carousel").owlCarousel({
    loop:true,
    stagePadding:5,
    margin: 10,
    nav: true,
    autoplay: false,
    center: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1200:{
            margin:60,
            items:2,
        },

    }
});

/*-------------------------
     AJAX CONTACT FORM
-------------------------*/
function validateEmail(email) {

    "use strict";

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function sendEmail() {

    "use strict";

    var name     = $('#name').val();
    var email    = $('#email').val();
    var subject  = $('#subject').val();
    var comments = $('#comments').val();

    if(!name){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Name is  required');
    } else if(!email){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is  required');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is not valid');
    } else if(!subject){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Subject is  required');
    }else if(!comments){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Comments is  required');
    }else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url:  "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span class="spinner-border spinner-border-sm"></span> Loading..');
            },
            success: function(data) {
                $('#submit-btn').html('Submit');
                var myObj = JSON.parse(data);
                if(myObj['status']=='Congratulation'){
                    $('#message').toast('show').addClass('bg-success').removeClass('bg-danger bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Error'){
                    $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Warning'){
                    $('#message').toast('show').addClass('bg-warning').removeClass('bg-success bg-danger');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('Submit');
                $('#message').toast('show').addClass('bg-danger').removeClass('bg-success bg-warning');
                $('.toast-body').html('<strong> Error : </strong> Something went wrong, Please try again.');
            },
        });
    }
}