const arrowDown = document.querySelector(".header__arrow-down");

arrowDown.addEventListener("mouseenter", () => {
  arrowDown.classList.add("animated");
});

arrowDown.addEventListener("animationend", () => {
  arrowDown.classList.remove("animated");
});
