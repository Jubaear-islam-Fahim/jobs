(function ($) {
    'use strict'



    // Counter 
    if ($('#counter').length) {
        var a = 0;
        var oTop = $('#counter').offset().top - window.innerHeight;
        console.log($('#counter').offset().top);
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    }

    // Range Slider
    const allRanges = document.querySelectorAll(".range-wrap");
    allRanges.forEach(wrap => {
        const range = wrap.querySelector(".range");
        const bubble = wrap.querySelector(".bubble");

        range.addEventListener("input", () => {
            setBubble(range, bubble);
        });
        setBubble(range, bubble);
    });

    function setBubble(range, bubble) {
        const val = range.value;
        const min = range.min ? range.min : 0;
        const max = range.max ? range.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;

        // Sorta magic numbers based on size of the native UI thumb
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }



    $('.container').imagesLoaded(function () {
        var $grid = $('.candidates-grid').isotope({
            itemSelector: '.candidates-grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.candidates-grid-item',
            }
        });
        var $grid = $('.browse-jobs-grid').isotope({
            itemSelector: '.browse-jobs-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.browse-jobs-item',
            }
        });

        // filter items on li click
        $('.candidates-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.candidates-filter li').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });


    $('.spotlight-slid').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    });
    $('.top-hiring-slid').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        nav: false,
        // navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.leader-slid').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 900,
    });
    $('.finest-slid').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
    });


    $('.visual-diary').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $(document).ready(function () {
        let mainNavLinks = document.querySelectorAll(".candidate-all a");
        let mainSections = document.querySelectorAll(".candidate-skill-item");

        let lastId;
        let cur = [];


        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY;

            mainNavLinks.forEach(link => {
                let section = document.querySelector(link.hash);

                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add("current");
                } else {
                    link.classList.remove("current");
                }
            });
        }); 

    });


})(jQuery);