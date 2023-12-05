var tl = gsap.timeline({ paused: true });

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  scroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => scroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
// loco();

// function sideMenu() {
// function openNav() {
animateOpenNav();
var navBtn = document.getElementById("nav");
if (navBtn) {
  navBtn.onclick = function () {
    // Toggle reversed to it's opposite value
    tl.reversed(!tl.reversed());
    // Use the toggle method in the classList API
    // navBtn.classList.toggle("active");
  };
}


// }

function animateOpenNav() {
  var mobileNav = document.getElementById("mb_nav");
  tl.to(mobileNav, {
    duration: 0.2,
    ease: "power2.out",
    x: "0%",
  }).to(".nav_toggle_wrapper", {
    background: "transparent",
    duration: 0
  })
    .to(
      ".nav__link",
      {
        opacity: 1,
        x: 0,
        // y:0,
        duration: 0.05,
        stagger: {
          // wrap advanced options in an object
          each: 0.1,
          ease: "power1.in",
        },
      },
      "start"
    )
    .to("body", {
      overflow: "hidden",
    })
    .to(
      ".bg-elm1",
      {
        opacity: 1,
        duration: 0.3,
        transform: "translateY(0%)",
      },
      "start"
    )
    .reverse(); // Finally reverse the timeline. reversed() is true
}
// init
// openNav();

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 1){
//       $('.nav_toggle_wrapper').addClass("sticky");
//     }
//     else{
//       $('.nav_toggle_wrapper').removeClass("sticky");
//     }
//   });
// }
// sideMenu();

function allSliders() {
  new Swiper("#banner-slider2", {
    spaceBetween: 0,
    speed: 200,
    // effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
    autoplay: {
      enabled: false,
      delay: 2000,
    },
  });

  // Home Banner
  // console.log($(".slider-for"))

  if ($(".slider-for").length > 0) {
    $(".slider-for").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: ".slider-nav",
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 3000,
      // centerMode: true,
      // centerPadding: '1000px',
    });
    $(".slider-nav").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      focusOnSelect: true,
      autoplay: false,
      autoplaySpeed: 0,
      speed: 2000,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: false,
            arrows: false,
            focusOnSelect: true,
            autoplay: false,
            autoplaySpeed: 0,
            speed: 2000,
          },
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            dots: false,
            arrows: false,
            focusOnSelect: true,
            autoplay: false,
            autoplaySpeed: 0,
            speed: 2000,
          },
        },
      ],
    });
  }

  // Packaging inner page sliders
  if ($(".packaging-products").length > 0) {
    $(".packaging-products").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 3000,
    });
  }

  // Home Progress
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 5000,
    },
    autoplay: false,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 4000)}s`;
      },
      speed: 400,
      spaceBetween: 100,
      delayBetweenSlides: 700,
    },
  });
}
allSliders();



$("a[data-slide]").click(function (e) {
  let textWrapper = document.querySelectorAll(".text-wrapper");
  e.preventDefault();
  var slideno = $(this).data("slide");


  $(".slider-nav").slick("slickGoTo", slideno - 1);
  $(".action a.active-link").removeClass("active-link");
  $(this).addClass("active-link");




  textWrapper.forEach(elm => {
    // console.log("elmelm", elm)

    elm.innerHTML = elm.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".text-wrapper .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 50 * (i + 1),
      })
      .add({
        targets: ".text-wrapper",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });

  });


});



swiper = new Swiper("#banner-slider2", {
  spaceBetween: 30,
  centeredSlides: true,
  speed: 3000,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    enabled: true,
    disableOnInteraction: false,
    // delay: 5000,
  },
});



// slick = [...slick]
// slick.forEach(slickItem =>{
//   console.log(slickItem.className)
//  if( slickItem.className == "slick-active"){
//   alert("e")
//  }
//  else{

//  }
// })

let textWrapper2 = document.querySelectorAll(".text-wrapper");
// textWrapper2 = [...textWrapper2]
// console.log(textWrapper2)



textWrapper2.forEach(elm2 => {
  console.log(elm2)
  elm2.innerHTML = elm2.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".text-wrapper .letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: (el, i) => 50 * (i + 1),
    })
    .add({
      targets: ".text-wrapper",
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });

});










