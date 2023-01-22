const menuNavigation = window.document.querySelector(".main-nav");
const menuToggle = window.document.querySelector(".main-nav__mobile-nav-toggle");

menuToggle.addEventListener("click", () => {
  menuNavigation.toggleAttribute("data-visible");
});
