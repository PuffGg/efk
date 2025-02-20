document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.getElementById("programsDropdown");

    dropdownToggle.addEventListener("click", function () {
        let isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
        dropdownToggle.setAttribute("aria-expanded", !isExpanded);
    });
});
    






              document.addEventListener("DOMContentLoaded", function () {
                const backToTopBtn = document.getElementById("backToTopBtn");
            
                window.addEventListener("scroll", function () {
                    if (window.scrollY > window.innerHeight / 2) {
                        backToTopBtn.style.display = "block";
                    } else {
                        backToTopBtn.style.display = "none";
                    }
                });
            
                backToTopBtn.addEventListener("click", function () {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                });
            });
            
   
   
   // SEARCH 
   document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const searchableElements = document.querySelectorAll('h1, h2, h3, p, .nav-item, li');

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();

        // Reset previous highlights
        searchableElements.forEach((element) => {
            element.style.backgroundColor = ''; 
        });

        // Prevent empty searches
        if (!query) {
            alert('Please enter a search term.');
            return;
        }

        let found = false;
        searchableElements.forEach((element) => {
            const text = element.textContent.toLowerCase();
            if (text.includes(query)) {
                element.style.backgroundColor = 'yellow';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found = true;
            }
        });

        if (!found) {
            alert('No matching content found.');
        }
    }

    // Event listener for search button
    searchButton.addEventListener('click', performSearch);

    // Allow pressing Enter in the search input to trigger the search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Toggle search bar expansion
    searchButton.addEventListener('click', function () {
        const container = document.querySelector('.search-container');
        container.classList.toggle('expanded');
        if (container.classList.contains('expanded')) {
            searchInput.focus();
        }
    });
});

    


       //MINIMIZE
       document.addEventListener("DOMContentLoaded", () => {
        const navbar = document.querySelector(".navbar");
        const toggleButton = document.querySelector(".header-toggle");

        toggleButton.addEventListener("click", () => {
            navbar.classList.toggle("minimized");
            toggleButton.classList.toggle("active");
            
            if (navbar.classList.contains("minimized")) {
                toggleButton.setAttribute("aria-label", "Maximize Navigation Bar");
            } else {
                toggleButton.setAttribute("aria-label", "Minimize Navigation Bar");
            }
        });
    });

//PROGRAMS DROPDOWN
    document.addEventListener("DOMContentLoaded", () => {
        // Dropdown toggle functionality
        const programsDropdown = document.getElementById("programsDropdown");
        const dropdownMenu = programsDropdown.nextElementSibling;
    
        programsDropdown.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            dropdownMenu.classList.toggle("show");
        });
    
        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!programsDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    
        // Toggle header functionality
        const headerToggle = document.querySelector(".header-toggle");
        headerToggle.addEventListener("click", () => {
            document.body.classList.toggle("header-minimized");
        });
    });
     

    


      //FAQs

      document.addEventListener('DOMContentLoaded', () => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close other open FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ
                item.classList.toggle('active');
            });
        });
    });   
      document.addEventListener('DOMContentLoaded', () => {
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter, target) => {
            const isCurrency = target >= 1000;
            let current = 0;
            const increment = target / 100; // Adjust speed of counting
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (current > target) current = target;
                    
                    if (isCurrency) {
                        counter.textContent = `Ksh${Math.floor(current).toLocaleString()}`;
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                }
            };
            
            updateCounter();
        };
        
        // Intersection Observer for triggering animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    });
      
      
      //SKIP TO MAIN CONTENT

       const skipLink = document.querySelector('.skip-link');

       // Add an event listener for the click event on the skip link
       skipLink.addEventListener('click', function(event) {
           event.preventDefault();  // Prevent the default link behavior
       
           // Get the target section (main content)
           const targetSection = document.querySelector('#main-content');
       
           // Scroll smoothly to the target section
           targetSection.scrollIntoView({
               behavior: 'smooth',
               block: 'start'
           });
       });
       
       
       

       
     
       
               // Intersection Observer for scroll animations
               const observer = new IntersectionObserver((entries) => {
                   entries.forEach(entry => {
                       if (entry.isIntersecting) {
                           entry.target.classList.add('visible');
                       }
                   });
               }, {
                   threshold: 0.1,
                   rootMargin: '-50px'
               });
       
               // Observe all animated sections
               document.querySelectorAll('.animate-section').forEach(section => {
                   observer.observe(section);
               });




// HAMBURGER MENU
// Get the elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle the "active" class on the nav menu and the toggle button when clicked
navToggle.addEventListener('click', () => {
    // Toggle the "active" class for both nav-menu and nav-toggle
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Optionally, toggle aria-expanded to reflect the state of the menu
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
});

               
               class Carousel {
                   constructor(element) {
                       this.carousel = element;
                       this.container = element.querySelector('.carousel-container');
                       this.slides = element.querySelectorAll('.carousel-slide');
                       this.nav = element.querySelector('.carousel-nav');
                       this.swipeIndicator = element.querySelector('.swipe-indicator');
                       
                       this.currentSlide = 0;
                       this.slideCount = this.slides.length;
                       
                       // Create navigation dots
                       this.slides.forEach((_, index) => {
                           const dot = document.createElement('div');
                           dot.classList.add('carousel-dot');
                           if (index === 0) dot.classList.add('active');
                           dot.addEventListener('click', () => this.goToSlide(index));
                           this.nav.appendChild(dot);
                       });
       
                       // Add button listeners
                       element.querySelector('.prev').addEventListener('click', () => this.prevSlide());
                       element.querySelector('.next').addEventListener('click', () => this.nextSlide());
       
                       // Touch events
                       let touchStartX = 0;
                       let touchEndX = 0;
       
                       this.carousel.addEventListener('touchstart', (e) => {
                           touchStartX = e.changedTouches[0].screenX;
                           this.showSwipeIndicator();
                       }, { passive: true });
       
                       this.carousel.addEventListener('touchend', (e) => {
                           touchEndX = e.changedTouches[0].screenX;
                           this.handleSwipe(touchStartX, touchEndX);
                           this.hideSwipeIndicator();
                       }, { passive: true });
                   }
       
                   showSwipeIndicator() {
                       this.swipeIndicator.classList.add('visible');
                   }
       
                   hideSwipeIndicator() {
                       this.swipeIndicator.classList.remove('visible');
                   }
       
                   handleSwipe(startX, endX) {
                       const diff = startX - endX;
                       if (Math.abs(diff) > 50) { // Minimum swipe distance
                           if (diff > 0) {
                               this.nextSlide();
                           } else {
                               this.prevSlide();
                           }
                       }
                   }
       
                   updateSlide() {
                       this.container.style.transform = `translateX(-${this.currentSlide * 100}%)`;
                       
                       // Update dots
                       const dots = this.nav.querySelectorAll('.carousel-dot');
                       dots.forEach((dot, index) => {
                           dot.classList.toggle('active', index === this.currentSlide);
                       });
                   }
       
                   nextSlide() {
                       this.currentSlide = (this.currentSlide + 1) % this.slideCount;
                       this.updateSlide();
                   }
       
                   prevSlide() {
                       this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
                       this.updateSlide();
                   }
       
                   goToSlide(index) {
                       this.currentSlide = index;
                       this.updateSlide();
                   }
               }
       
               // Initialize all carousels
               document.querySelectorAll('.carousel').forEach(carousel => {
                   new Carousel(carousel);
               });
       
               window.onscroll = function() {
               var backToTopBtn = document.querySelector('.back-to-top');
               if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                   backToTopBtn.style.display = 'block';
               } else {
                   backToTopBtn.style.display = 'none';
               }
           }
       

           

