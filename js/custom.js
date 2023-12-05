const nav = document.querySelector(".navbar");
const prev_btn = document.querySelector(".prev");
const next_btn = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const goToTopBtn = document.querySelector(".goToTopBtn");
const prev_circle = document.querySelector(".prev_circle");
const next_circle = document.querySelector(".next_circle");
const circle = document.querySelector(".circle");
const pin_circle = document.querySelectorAll(".pin_circle");
const first_pin = document.querySelector(".pin_circle1");
const last_pin = document.querySelector(".pin_circle8");

const xsm = window.matchMedia("(max-width:575.98px)");
const sm = window.matchMedia("(max-width:767.98px)");
const md = window.matchMedia("(max-width: 991.98px)");
const lg = window.matchMedia("(max-width:1199.98px)");

const responsive_circle = () => {
  if (xsm.matches) return 150;
  else if (sm.matches) return 150;
  else if (md.matches) return 200;
  else if (lg.matches) return 350;
  else return 450;
};

const responsive_pin_circle_size = () => {
  if (xsm.matches) return 3;
  else if (sm.matches) return 5;
  else if (md.matches) return 6;
  else if (lg.matches) return 7;
  else return 8;
};

const responsive_slide = () => {
  let active_slide = document.querySelector(".active_slide");
  return active_slide.offsetWidth + 16;
};

let circle_size = responsive_circle();
let slide_size = responsive_slide();

window.addEventListener("load", () => {
  let active_circle = document.querySelector(".active_circle");
  active_circle.style.transform = "scale(" + responsive_pin_circle_size() + ")";
});
// code for scrollToTop and navbar

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

goToTopBtn.addEventListener("click", () => {
  scrollToTop();
});




// code for rectangular slider

const setPrevButtonUI = () => {
  let active_slide = document.querySelector(".active_slide");
  if (active_slide.classList.contains("slide8")) {
    prev_btn.style.backgroundColor = "transparent";
    prev_btn.style.color = "#ff5c26";
  } else {
    prev_btn.style.backgroundColor = "#ff5c26";
    prev_btn.style.color = "#fff";
  }
};
const setNextButtonUI = () => {
  let active_slide = document.querySelector(".active_slide");
  if (active_slide.classList.contains("slide4")) {
    next_btn.style.backgroundColor = "transparent";
    next_btn.style.color = "#ff5c26";
  } else {
    next_btn.style.backgroundColor = "#ff5c26";
    next_btn.style.color = "#fff";
  }
};

let l = 0;

setNextButtonUI();
setPrevButtonUI();

prev_btn.addEventListener("click", () => {
  let active_slide = document.querySelector(".active_slide");
  if (!active_slide.classList.contains("slide8")) {
    l++;
    slides.forEach((slide) => {
      if (l == 0) {
        slide.style.left = "0px";
      }
      if (l == 1) {
        slide.style.left = -slide_size * 1 + "px";
      }
      if (l == 2) {
        slide.style.left = -slide_size * 2 + "px";
      }
      if (l == 3) {
        slide.style.left = -slide_size * 3 + "px";
      }
      if (l == 4) {
        slide.style.left = -slide_size * 4 + "px";
      }
      if (l > 4) {
        l = 4;
      }
    });
    active_slide.classList.remove("active_slide");
    active_slide.nextElementSibling.classList.add("active_slide");
  }
  setNextButtonUI();
  setPrevButtonUI();
});

next_btn.addEventListener("click", () => {
  let active_slide = document.querySelector(".active_slide");
  setPrevButtonUI(active_slide);
  setNextButtonUI(active_slide);
  if (!active_slide.classList.contains("slide4")) {
    l--;
    slides.forEach((slide) => {
      if (l == 0) {
        slide.style.left = "0px";
      }
      if (l == 1) {
        slide.style.left = -slide_size * 1 + "px";
      }
      if (l == 2) {
        slide.style.left = -slide_size * 2 + "px";
      }
      if (l == 3) {
        slide.style.left = -slide_size * 3 + "px";
      }
      if (l == 4) {
        slide.style.left = -slide_size * 4 + "px";
      }
      if (l < 0) {
        l = 0;
      }
      active_slide.classList.remove("active_slide");
      active_slide.previousElementSibling.classList.add("active_slide");
    });
  }
  setNextButtonUI();
  setPrevButtonUI();
});




$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
});


$('#navtoggle').click(function() {
	$(this).toggleClass('active');
	$('header').toggleClass('navopen');
   });