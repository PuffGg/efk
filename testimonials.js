const testimonials = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.querySelector('.nav-dots');
let currentSlide = 0;
let interval;

// Create navigation dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.nav-dot');

function goToSlide(index) {
    // Remove active classes
    testimonials[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Add active classes to new slide
    currentSlide = index;
    testimonials[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset interval
    resetInterval();
}

function nextSlide() {
    goToSlide((currentSlide + 1) % testimonials.length);
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
}

// Start the automatic rotation
resetInterval();

// Pause rotation on hover
document.querySelector('.testimonial-container').addEventListener('mouseenter', () => {
    clearInterval(interval);
});

// Resume rotation when mouse leaves
document.querySelector('.testimonial-container').addEventListener('mouseleave', resetInterval);