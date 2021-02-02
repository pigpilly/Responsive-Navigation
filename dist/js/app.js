"use strict";
var navSlide = function () {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('nav ul');
    var navLinks = document.querySelectorAll('nav li');
    // Toggle nav
    burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function () {
        nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
        burger.classList.toggle('toggle');
        // Animate links
        navLinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards " + (index / 7 + 0.25) + "s";
            }
        });
    });
};
navSlide();
