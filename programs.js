



document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach(carousel => {
      const slides = carousel.querySelectorAll('.carousel-slide');
      const prevButton = carousel.querySelector('.prev');
      const nextButton = carousel.querySelector('.next');
      const dots = carousel.querySelectorAll('.carousel-dot');
      
      let currentSlide = 0;
      let touchStartX = 0;
      let touchEndX = 0;
      
      // Function to update slides
      function updateSlides() {
          slides.forEach(slide => {
              slide.classList.remove('active');
          });
          slides[currentSlide].classList.add('active');
          
          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === currentSlide);
          });
      }
      
      // Function to handle next slide
      function nextSlide() {
          currentSlide++;
          if (currentSlide >= slides.length) {
              currentSlide = 0;
          }
          updateSlides();
      }
      
      // Function to handle previous slide
      function prevSlide() {
          currentSlide--;
          if (currentSlide < 0) {
              currentSlide = slides.length - 1;
          }
          updateSlides();
      }
      
      // Touch event handlers
      carousel.addEventListener('touchstart', (e) => {
          touchStartX = e.touches[0].clientX;
      }, { passive: true });
      
      carousel.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].clientX;
          handleSwipe();
      }, { passive: true });
      
      // Function to handle swipe
      function handleSwipe() {
          const swipeThreshold = 50; // Minimum distance for swipe
          const swipeDistance = touchEndX - touchStartX;
          
          if (Math.abs(swipeDistance) > swipeThreshold) {
              if (swipeDistance > 0) {
                  // Swiped right
                  prevSlide();
              } else {
                  // Swiped left
                  nextSlide();
              }
          }
      }
      
      // Button click handlers
      if (prevButton) {
          prevButton.addEventListener('click', prevSlide);
      }
      
      if (nextButton) {
          nextButton.addEventListener('click', nextSlide);
      }
      
      // Dot navigation
      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              currentSlide = index;
              updateSlides();
          });
      });
  });
});