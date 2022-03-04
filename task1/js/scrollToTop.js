(function() {
    'use strict';
    
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) {
        scrollBtn.classList.add("scrollToTopBtnShow");
    }
    if (scrolled < coords / 2) {
        scrollBtn.classList.remove("scrollToTopBtnShow");
    }
}

function scrollToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0,
            behavior: "smooth"
            });
    }
}

function scrollOpacity() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    let opacity = 0;

    if (scrolled > coords / 2) {
        scrollBtn.style.opacity = opacity;
    }

    if (scrolled > coords / 1.7) {
        scrollBtn.style.opacity = opacity + 0.3;
    }

    if (scrolled > coords / 1.4) {
        scrollBtn.style.opacity = opacity + 0.6;
    }

    if (scrolled > coords) {
        scrollBtn.style.opacity = opacity + 1;
    }

}

let scrollBtn = document.querySelector(".scrollToTopBtn");

window.addEventListener("scroll", trackScroll);
window.addEventListener("scroll", scrollOpacity);
scrollBtn.addEventListener("click", scrollToTop);
})();