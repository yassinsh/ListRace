document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});










let form = document.querySelector(".form");
let emailInput = document.querySelector(".input-clear");
let submit = document.querySelector(".button");
form.addEventListener("submit", e => {
    e.preventDefault();
    let emailValue = emailInput.value
    emailInput.value = "";
}
)


let formHero = document.querySelector(".formw");
let whatsInput = document.querySelector(".whats");
let locationInput = document.querySelector(".location");

let submitW = document.querySelector(".btn-search");
form.addEventListener("submitW", w => {
    w.preventDefault();
    let whatsInput = whatsInput.value
    whatsInput.value = "";
    let locationInput = locationInput.value
    locationInput.value = "";
}
)








const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "card",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});