// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Farm Cards Hover Effect
document.querySelectorAll('.farm-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Simple Map Implementation (Replace with actual map integration)
function initMap() {
    const mapContainer = document.getElementById('farmMap');
    mapContainer.innerHTML = '<div style="padding: 20px; text-align: center;">Interactive Map Placeholder</div>';
}

// Initialize map
initMap();
