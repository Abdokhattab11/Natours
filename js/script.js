const navBtn = document.querySelector(".main__navigation__btn");
const navgation = document.getElementById("main-nav");
const icon = document.querySelectorAll("#nav__btn");
const nav_links = document.querySelectorAll(".main__navigation__nav-item");
const popupBookBtn = document.querySelector(".popup .btn");
const popupShowBtn = document.querySelectorAll(".show-popup-btn");
const popupCloseBtn = document.querySelector(".close-popup-btn");
const popup = document.querySelector(".popup");

const toggleNavgation = () => {
  navgation.classList.toggle("main__navigation__active");
  for (let i = 0; i < icon.length; i++) {
    icon[i].classList.toggle("hidden");
  }
};

navBtn.addEventListener("click", toggleNavgation);

popupBookBtn.addEventListener("click", function () {
  popup.classList.remove("popup-shown");
});

popupCloseBtn.addEventListener("click", function () {
  popup.classList.remove("popup-shown");
});

for (let i = 0; i < popupShowBtn.length; i++) {
  popupShowBtn[i].addEventListener("click", function () {
    popup.classList.add("popup-shown");
  });
}

for (let i = 0; i < nav_links.length; i++) {
  nav_links[i].addEventListener("click", toggleNavgation);
}
