let currentHomeSlide = 0;
const homeSlides = document.querySelectorAll('.home-slide');
const homeDots = document.querySelectorAll('.slider-dot');

function showHomeSlide(index) {

    homeSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    homeDots.forEach((dot) => {
        dot.classList.remove('active');
    });

    homeSlides[index].classList.add('active');
    homeDots[index].classList.add('active');

    currentHomeSlide = index;
}


/* Automatic Slider */
setInterval(function () {

    currentHomeSlide++;

    if (currentHomeSlide >= homeSlides.length) {
        currentHomeSlide = 0;
    }

    showHomeSlide(currentHomeSlide);

}, 5000);