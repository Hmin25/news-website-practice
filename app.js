const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  // var i;
  // var x = document.getElementsByClassName("mySlides");
  // if (n > x.length) {
  //   slideIndex = 1;
  // }
  // if (n < 1) {
  //   slideIndex = x.length;
  // }
  // for (i = 0; i < x.length; i++) {
  //   x[i].style.display = "none";
  // }
  // if (slideIndex - 1 >= 0) {
  //   x[slideIndex - 1].style.display = "block";
  // }
}

//owl carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 0,
  autoplay: 500,
  autoplayTimeout: 400,
  autoplayHoverPause: true,
  responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
});

