let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');
let autoplayInterval;

nextButton.onclick = function(){
    showSlider('next');
    resetAutoplay();
}

prevButton.onclick = function(){
    showSlider('prev');
    resetAutoplay();
}

seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
        resetAutoplay();
    }
});

backButton.onclick = function(){
    carousel.classList.remove('showDetail');
    resetAutoplay();
}

// Function to show slider in the given direction
const showSlider = (type) => {
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
}

// Function to start autoplay
const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
        showSlider('next');
    }, 3000); // Change 2000 to adjust autoplay speed (milliseconds)
}

// Function to reset autoplay
const resetAutoplay = () => {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Start autoplay when the page loads
startAutoplay();

// Pause autoplay when the mouse enters the carousel area
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

// Resume autoplay when the mouse leaves the carousel area
carousel.addEventListener('mouseleave', () => {
    startAutoplay();
});
