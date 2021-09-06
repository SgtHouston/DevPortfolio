/*-----------------------------------------------------------
* Template Name    : Chris | Responsive Bootstrap 5 Personal Template
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function ($) {
    "use strict";

    var ChrisApp = function () { };

    //PreLoader
    ChrisApp.prototype.initPreLoader = function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    },

        //scroll
        ChrisApp.prototype.initStickyMenu = function () {
            var navbar = document.querySelector('nav')
            window.onscroll = function () {
                // pageYOffset or scrollY
                if (window.pageYOffset > 200) {
                    navbar.classList.add('stickyadd')
                } else {
                    navbar.classList.remove('stickyadd')
                }
            }
        },

        //Scrollspy
        ChrisApp.prototype.initScrollspy = function () {
            var scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: '#main_nav',
                offset: 70
            })
        },

        //Work
        ChrisApp.prototype.initWork = function () {
            $(window).on('load', function () {
                var $container = $('.work-filter');
                var $filter = $('#menu-filter');
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });

                $filter.find('a').on("click", function () {
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
            });
        },

        //Magnificpop
        ChrisApp.prototype.initMagnificPopup = function () {
            $('.img-zoom').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                }
            });
        },

        // BACK TO TOP
        ChrisApp.prototype.initBackToTop = function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    $('.back_top').fadeIn();
                } else {
                    $('.back_top').fadeOut();
                }
            });
            $('.back_top').click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            });
        },

        //Client
        ChrisApp.prototype.initTestimonial = function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                nav: false,
                items: 1,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                autoHeight: false,
                autoHeightClass: 'owl-height'
            })
        }

    ChrisApp.prototype.init = function () {
        this.initPreLoader();
        this.initStickyMenu();
        this.initScrollspy();
        this.initWork();
        this.initMagnificPopup();
        this.initBackToTop();
        this.initTestimonial();
    },
        //init
        $.ChrisApp = new ChrisApp, $.ChrisApp.Constructor = ChrisApp
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.ChrisApp.init();
    }(window.jQuery);



