// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Humberger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Scrolling
var navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    var targetPosition = target.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
