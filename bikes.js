 // About section slider functionality
 document.addEventListener('DOMContentLoaded', function() {
    // About slider
    const aboutSlider = document.getElementById('about-slider');
    const aboutPrevBtn = document.getElementById('about-prev-btn');
    const aboutNextBtn = document.getElementById('about-next-btn');
    const aboutIndicators = document.querySelectorAll('#about-indicators .indicator');
    
    let aboutCurrentSlide = 0;
    const aboutSlideCount = 4; // Number of slides
    
    function updateAboutSlider() {
        aboutSlider.style.transform = `translateX(-${aboutCurrentSlide * 25}%)`;
        
        // Update indicators
        aboutIndicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === aboutCurrentSlide);
        });
    }
    
    aboutPrevBtn.addEventListener('click', function() {
        aboutCurrentSlide = (aboutCurrentSlide - 1 + aboutSlideCount) % aboutSlideCount;
        updateAboutSlider();
    });
    
    aboutNextBtn.addEventListener('click', function() {
        aboutCurrentSlide = (aboutCurrentSlide + 1) % aboutSlideCount;
        updateAboutSlider();
    });
    
    // Add click event to indicators
    aboutIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            aboutCurrentSlide = index;
            updateAboutSlider();
        });
    });
    
    // Auto-movement has been removed
});