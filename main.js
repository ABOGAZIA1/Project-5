const mobilemenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".nav-items");

mobilemenu.addEventListener("click", () => {
nav.classList.toggle("active");
});

navLinks.forEach((navLink)  => {
navLink.addEventListener("click", () => {
    nav.classList.toggle("active");
});
});