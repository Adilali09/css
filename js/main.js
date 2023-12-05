// A $( document ).ready() block.
jQuery(document).ready(function($) {
    $(".load-more-reviews-wrapper").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $('.reviews-second-part').show();
        $('.reviews-second-part').show();
        $('.reviews-first-part li:nth-last-child(1)').show();
        $('.reviews-first-part li:nth-last-child(2)').show();
    });
    // Hide header on scroll down
    $(".rmp_menu_trigger").click(function() {
        if ($('.rmp_menu_trigger').hasClass("is-active")) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'scroll');
        }
    });


    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If scrolled down and past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('#site-header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            //console.log(st);
            if (st + $(window).height() < $(document).height() && st != 0) {
                $('#site-header').removeClass('nav-up').addClass('nav-down');
                console.log('first');
            }
            if (st + $(window).height() < $(document).height()) {
                if (st == 0) {
                    $('#site-header').removeClass('nav-up').removeClass('nav-down');
                    console.log('third');
                } else {
                    $('#site-header').removeClass('nav-down').addClass('nav-down');
                }

            }
            //console.log(st);
            // if (st != 0) {
            //     $('#site-header').removeClass('nav-up').addClass('nav-down');
            // }
            // if (st == 0) {
            //     $('#site-header').removeClass('nav-down');
            // }

        }

        lastScrollTop = st;
    }


    $('.portfolio-slider-home').owlCarousel({
        loop: false,
        margin: 40,
        nav: true,
        navText: ["<div class='slider-button-previous slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 7L0 0h13z'></path></svg></div>", "<div class='slider-button-next slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 0L13 7H0z'></path></svg></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })




    $('.before-after-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        navText: ["<div class='slider-button-previous slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 7L0 0h13z'></path></svg></div>", "<div class='slider-button-next slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 0L13 7H0z'></path></svg></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })




    $('.timeline-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        center: true,
        navText: ["<div class='slider-button-previous slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 7L0 0h13z'></path></svg></div>", "<div class='slider-button-next slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 0L13 7H0z'></path></svg></div>"],
        responsive: {
            0: {
                items: 1.3
            },
            600: {
                items: 2.3
            },
            1000: {
                items: 3.3
            }
        }
    })
    $('.company-member-slider').owlCarousel({
        stagePadding: 40,
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<div class='slider-button-previous slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 7L0 0h13z'></path></svg></div>", "<div class='slider-button-next slider-button'><div class='slider-btn-bg'></div><div class='slider-btn-border'></div><svg height='7' viewBox='0 0 13 7' width='13'><path d='M6.5 0L13 7H0z'></path></svg></div>"],
        responsive: {
            0: {
                items: 1,
                dots: false,
                stagePadding: 40,
                // smartSpeed: 450,
                // autoplay: true,
                // autoplayHoverPause: true
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    $(".back-to-top").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return false;
    });

    $.fn.allchange = function(callback) {
        var me = this;
        var last = "";
        var infunc = function() {
            var text = $(me).val();
            if (text != last) {
                last = text;
                callback();
            }
            setTimeout(infunc, 100);
        }
        setTimeout(infunc, 100);
    };


    $("#gform_wrapper_1 .gfield input, #gform_wrapper_7 .gfield input").allchange(function() {
        //alert("change!");
        //console.log('has value');
        $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("left", "0px");
        $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("top", "-16px");
        $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("color", "var(--kiwi-blue)");
        $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("font-size", "12px");
        $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("font-family", "'Avenir Medium'");
        $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".ginput_container").css("animation-play-state", "running");
    });

    $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').on('click', commonFn);

    $('body').on('keydown', '#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield', function(e) {
        //console.log(e)
        if (e.which == 9) {
            //e.preventDefault(); 
            //console.log('cursor active')
            $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("left", "0px");
            $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("top", "-16px");
            $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("color", "var(--kiwi-blue)");
            $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("font-size", "12px");
            $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".gfield_label").css("font-family", "'Avenir Medium'");
            $('#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield').children(".ginput_container").css("animation-play-state", "running");
        }
    });


    function commonFn() {
        // console.log('function called')
        //console.log($(this))
        $(this).children(".gfield_label").css("left", "0px");
        $(this).children(".gfield_label").css("top", "-16px");
        $(this).children(".gfield_label").css("color", "var(--kiwi-blue)");
        $(this).children(".gfield_label").css("font-size", "12px");
        $(this).children(".gfield_label").css("font-family", "'Avenir Medium'");
        $(this).children(".ginput_container").css("animation-play-state", "running");
    }




    // $("#gform_wrapper_1 .gfield, #gform_wrapper_7 .gfield").click(function() {
    //     $(this).children(".gfield_label").css("left", "0px");
    //     $(this).children(".gfield_label").css("top", "-16px");
    //     $(this).children(".gfield_label").css("color", "var(--kiwi-blue)");
    //     $(this).children(".gfield_label").css("font-size", "12px");
    //     $(this).children(".gfield_label").css("font-family", "'Avenir Medium'");
    //     $(this).children(".ginput_container").css("animation-play-state", "running");
    // });
    $("#gform_wrapper_8 .gfield").click(function() {
        $(this).children(".gfield_label").css("left", "0px");
        $(this).children(".gfield_label").css("top", "0px");
        $(this).children(".gfield_label").css("color", "var(--kiwi-blue)");
        //$(this).children(".gfield_label").css("font-size", "12px");
        $(this).children(".gfield_label").css("font-family", "'Avenir Medium'");
        $(this).children(".ginput_container").css("animation-play-state", "running");
        $(this).children(".ginput_container").css("border", "none");
    });
    $(".popup-btn").click(function() {
        $this = jQuery(this);
        $("#field_1_5 select").val("Website Design & Development").change();
        formTitle = $this.data('title');
        if (formTitle == 'Search Engine Optimisation') {
            $("#field_1_5 select").val("SEO").change();
        }
        if (formTitle == 'Mobile App Development') {
            $("#field_1_5 select").val("Mobile Apps").change();
        }
        if (formTitle == 'CRM Development') {
            $("#field_1_5 select").val("CRM Development").change();
        }
        if (formTitle == 'Software Development') {
            $("#field_1_5 select").val("Software Development").change();
        }
        if (formTitle == 'Google Adwords Management') {
            $("#field_1_5 select").val("Google Adwords").change();
        }
        if (formTitle == 'Full E-commerce Website Design & Development') {
            $("#field_1_5 select").val("E-commerce Website").change();
        }
        if (formTitle == 'Starter E-commerce Website Design & Development') {
            $("#field_1_5 select").val("E-commerce Website").change();
        }
        if (formTitle == 'Custom Website Design & Development') {
            $("#field_1_5 select").val("Custom Website").change();
        }
    });







    function getElementsForAnimation(container, selector) {
        if (Array.isArray(container)) {
            return container.map(el => {
                const a = Array.from(el.querySelectorAll(selector));
                if (el.matches(selector)) a.unshift(el);
                return a;
            }).flat();
        }
        return container.querySelectorAll(selector);
    }

    function wrap(el, wrapper) {
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }
    //import getElementsForAnimation from '../../functions/getElementsForAnimation';
    //import {wrap} from "../../functions";

    const spriteSheetsCleaningCallback = [];

    function spriteSheetAnimation(container = document) {

        while (spriteSheetsCleaningCallback.length) {
            spriteSheetsCleaningCallback.pop()();
        }

        const spriteSheets = getElementsForAnimation(container, 'img.sprite-sheet');
        // console.log(spriteSheets);
        for (const spriteSheet of spriteSheets) {
            // data for animation
            const { frames, frame_x, frame_y, width = 'auto', loop_start_index = 0, duration = 2, initial_duration = 0, repeat = -1, repeatDelay = 0 } = spriteSheet.dataset;
            let checkImageDimensions, interval, initialInterval, repeatDelaySetTimeout,
                currentIndex = 0,
                remainingRepeat = repeat,
                stopInterval = false,
                gridSize = { x: 0, y: 0 };


            spriteSheet.classList.remove('sprite-sheet');
            spriteSheet.classList.add('sprite-sheet__img');
            const parent = document.createElement('DIV');
            parent.classList.add('sprite-sheet__parent');
            parent.style.width = width;
            const aspectRatio = document.createElement('DIV');
            aspectRatio.classList.add('sprite-sheet__aspect-ratio');
            wrap(spriteSheet, parent);
            wrap(spriteSheet, aspectRatio);
            const nextFrame = () => {
                currentIndex++;
                spriteSheet.style.transform = `translate(${((currentIndex % frames) % (gridSize.x)) / -gridSize.x * 100}%,${((~~((currentIndex % frames) / gridSize.x)) % (gridSize.y)) / -gridSize.y * 100}%)`;
            }

            new Promise(resolve => {
                    checkImageDimensions = setInterval(function() {
                        if (spriteSheet.naturalWidth) {
                            clearInterval(checkImageDimensions);
                            resolve()
                        }
                    }, 10);
                })
                .then(() => {
                    gridSize.x = spriteSheet.naturalWidth / frame_x;
                    gridSize.y = spriteSheet.naturalHeight / frame_y;
                    spriteSheet.style.width = 100 * gridSize.x + '%';
                    spriteSheet.style.height = 100 * gridSize.y + '%';
                    aspectRatio.style.paddingTop = frame_y / frame_x * 100 + '%'
                })

            new Promise(resolve => spriteSheet.complete ? resolve() : (spriteSheet.onload = resolve))
                .then(() => {
                    const createInterval = () => {
                        let stop = false;
                        return setInterval(
                            () => {
                                if (stop) return;
                                nextFrame();

                                if (currentIndex + 1 >= frames) {
                                    stop = true;
                                    clearInterval(interval);
                                    if (remainingRepeat !== 0) {
                                        repeatDelaySetTimeout = setTimeout(() => {
                                            currentIndex = loop_start_index - 1;
                                            remainingRepeat--;
                                            interval = createInterval();
                                        }, repeatDelay * 1000);
                                    }
                                }
                            },
                            duration * 1000 / (frames - loop_start_index),
                        );
                    };
                    if (loop_start_index !== 0) {
                        initialInterval = setInterval(
                            () => {
                                if (stopInterval) return;
                                nextFrame()
                                if (currentIndex + 1 >= loop_start_index) {
                                    stopInterval = true;
                                    clearInterval(initialInterval);
                                }
                            },
                            initial_duration * 1000 / loop_start_index,
                        );
                    }
                    setTimeout(() => interval = createInterval(), loop_start_index ? initial_duration : 0);
                });


            spriteSheetsCleaningCallback.push(() => {
                spriteSheet.onload = null;
                clearInterval(checkImageDimensions);
                clearInterval(initialInterval);
                clearInterval(interval);
                clearTimeout(repeatDelaySetTimeout);
            })
        }

    }







    spriteSheetAnimation(document);





});

(function($) {
        $(".team-member video").each(function() {
            var sourceFile = $(this).attr("data-src");
            $(this).attr("src",
                sourceFile);
        });
        $(".team-member video").each(function() {
            this.load();
            this.play();
        });

        $('.btn-pop-up').click(function() {
            $this = jQuery(this);
            memberName = $this.data('title');
            memberText = $this.data('text');
            memberImage = $this.data('image');
            memberClass = $this.data('class');
            memberClass = '.' + memberClass;
            memberDesc = $(memberClass).html();

            jQuery('#member-name').html(memberName);
            jQuery('#member-img').attr('src', memberImage);
            jQuery('#member-pop-up-body .member-tagline').html(memberText);
            jQuery('#member-pop-up-body .member-detailed-text').html(memberDesc);
        })

        $('.modal-image-link').click(function() {
            $this = jQuery(this);
            modalName = $this.data('name');
            modalImage = $this.data('image');

            jQuery('#modal-title').html(modalName);
            jQuery('#modal-image').attr('src', modalImage);
        })

        $('.scrollToID').click(function() {
            $('html').css("scroll-behavior", "smooth");
        })
    }

)(jQuery);


//  GSAP SLIDER




gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);


const maxRotation = 220;


const updateActiveIndex = (activeIndex, rotation, maxRotation, steps) => {
    const incrementDegrees = maxRotation / steps,
        currentIndex = rotation / incrementDegrees,
        remainingFraction = currentIndex % 1;

    if (remainingFraction < .3) {
        activeIndex.image = Math.floor(currentIndex);
        activeIndex.slide = Math.floor(currentIndex);
    } else if (remainingFraction > .7) {
        activeIndex.image = Math.ceil(currentIndex);
        activeIndex.slide = Math.ceil(currentIndex);
    } else {
        activeIndex.image = -1;
    }

};

const updateSlides = (activeIndex, rotation, maxRotation, images, slides, slideNumber, sliderButtons, updateActive = true, prevIndex) => {
    const oldActiveIndex = {...activeIndex };
    updateActive && updateActiveIndex(activeIndex, rotation, maxRotation, images.length - 1);

    //console.log(oldActiveIndex)

    if (!updateActive) {
        images[prevIndex.image].classList.remove('active');
        images[activeIndex.image].classList.add('active');
        slides[prevIndex.slide].classList.remove('active');
        slides[activeIndex.slide].classList.add('active');
        slideNumber.textContent = String(activeIndex.slide + 1).padStart(2, '0');
        sliderButtons.next.classList.toggle('swiper-button-disabled', activeIndex.slide >= images.length - 1);
        sliderButtons.prev.classList.toggle('swiper-button-disabled', activeIndex.slide <= 0);
        return;
    }
    if (activeIndex.slide === -1) {
        activeIndex.image = 0;
        activeIndex.slide = 0;
    }

    if (oldActiveIndex.image !== activeIndex.image) {
        // console.log(oldActiveIndex)
        images[oldActiveIndex.image].classList.remove('active');
        images[activeIndex.image].classList.add('active');
    }
    if (oldActiveIndex.slide !== activeIndex.slide) {
        slides[oldActiveIndex.slide].classList.remove('active');
        slides[activeIndex.slide].classList.add('active');
        slideNumber.textContent = String(activeIndex.slide + 1).padStart(2, '0');
        sliderButtons.next.classList.toggle('swiper-button-disabled', activeIndex.slide >= images.length - 1);
        sliderButtons.prev.classList.toggle('swiper-button-disabled', activeIndex.slide <= 0);


    }


};



const blocks = document.querySelectorAll('.block-slider-circle-vertical-2');

for (let block of blocks) {

    const imagesLoading = [];
    const slideImages = Array.from(block.querySelectorAll('img'));
    for (const slideImage of slideImages) {
        imagesLoading.push(new Promise(resolve => slideImage.complete ? resolve() : (slideImage.onload = resolve)));
    }

    Promise.allSettled(imagesLoading).then(() => {


        const activeIndex = { image: 0, slide: 0 },
            prevIndex = {...activeIndex },
            imagesWrapper = block.querySelector('.images-wrapper'),
            imageWrapper = imagesWrapper.querySelectorAll('.image-wrapper'),
            images = imagesWrapper.querySelectorAll('picture'),
            spin = gsap.to(imageWrapper, { duration: 1000, rotation: -maxRotation, ease: 'linear', paused: true }),
            snapDegree = maxRotation / (images.length - 1),
            slides = block.querySelectorAll('.slide-text'),
            slideNumber = block.querySelector('.result-focused>.number'),
            sliderButtons = {
                next: block.querySelector('.result-focused .swiper-btns>.swiper-button-next'),
                prev: block.querySelector('.result-focused .swiper-btns>.swiper-button-prev'),
            },
            draggable = Draggable.create(imagesWrapper, {
                type: 'rotation',
                bounds: { minRotation: 0, maxRotation },
                inertia: true,
                snap: function(endValue) {
                    return Math.round(endValue / snapDegree) * snapDegree;
                },
                dragResistance: 0.4,
                throwResistance: 20000,
                onDragEnd() {
                    // console.log(activeIndex)
                    spin.progress(this.rotation / maxRotation);
                    updateSlides(activeIndex, this.rotation, maxRotation, images, slides, slideNumber, sliderButtons, true, prevIndex);
                },
                // onThrowUpdate() {
                //     spin.progress(this.rotation / maxRotation);
                //     updateSlides(activeIndex, this.rotation, maxRotation, images, slides, slideNumber, sliderButtons, true, prevIndex);
                // },
            });

        // draggable[0].disable();
        const animateTo = (index) => {
            const prevIndex = {...activeIndex };
            activeIndex.slide = index;
            activeIndex.image = index;
            updateSlides(activeIndex, draggable[0].rotation, maxRotation, images, slides, slideNumber, sliderButtons, false, prevIndex);
            gsap.to(imagesWrapper, {
                rotation: `${maxRotation / (images.length - 1) * index}`,
                onUpdate() {
                    draggable[0].update();
                    spin.progress(draggable[0].rotation / maxRotation);
                },
            });
        };

        sliderButtons.next.addEventListener('click', () => {
            const nextSlide = activeIndex.slide + 1;
            nextSlide >= slides.length || animateTo(nextSlide);

        });
        sliderButtons.prev.addEventListener('click', () => {
            const prevSlide = activeIndex.slide - 1;
            prevSlide < 0 || animateTo(prevSlide);
        });


        let angleIncrement = -Math.PI * 2 * maxRotation / 360 / (images.length - 1),
            radius = imagesWrapper.offsetWidth / 2,
            angle;
        for (let i = 0; i < images.length; i++) {
            angle = angleIncrement * i - Math.PI;
            const image = images[i];
            const slide = slides[i];
            gsap.set(image.parentElement, {
                xPercent: -50,
                yPercent: -50,
                left: (radius + Math.cos(angle) * radius) / radius * 50 + '%',
                top: (radius + Math.sin(angle) * radius) / radius * 50 + '%',
            });
            i === 0 && image.classList.add('active');
            i === 0 && slide.classList.add('active');


            image.addEventListener('click', () => animateTo(i));
        }
    })
}