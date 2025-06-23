// let menu = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

// menu.onclick = () => {
//     menu.classList.toggle("bx-x");
//     navbar.classList.toggle("active");
// }

// window.onscroll = () => {
//     menu.classList.remove("bx-x");
//     navbar.classList.remove("active");
// }

// // Typing Text Code
// const typed = new Typed('.multiple-text', {
//     strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
//     typeSpeed: 60,
//     backSpeed: 60,
//     backDelay: 1000,
//     loop: true,
// });

document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menu && navbar) {
        menu.onclick = () => {
            menu.classList.toggle("bx-x");
            navbar.classList.toggle("active");
        };

        window.onscroll = () => {
            menu.classList.remove("bx-x");
            navbar.classList.remove("active");
        };
    } else {
        console.warn("Menu icon or navbar not found in the DOM.");
    }

    // Typing Text Code
    if (typeof Typed !== "undefined") {
        new Typed('.multiple-text', {
            strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
            typeSpeed: 60,
            backSpeed: 60,
            backDelay: 1000,
            loop: true,
        });
    } else {
        console.warn("Typed.js library is not loaded.");
    }
});