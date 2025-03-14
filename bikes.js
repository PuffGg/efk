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



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('testimonials-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Get all testimonial elements
    const testimonials = slider.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    // Hide all testimonials except the first one
    for (let i = 1; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        // Show the testimonial at the specified index
        testimonials[index].style.display = 'block';
    }
    
    // Previous button click event
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = testimonials.length - 1;
        }
        showTestimonial(currentIndex);
    });
    
    // Next button click event
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        showTestimonial(currentIndex);
    });
});