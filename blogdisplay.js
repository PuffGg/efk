  // Add event listeners to like buttons
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const likesCount = this.nextElementSibling;
        let currentLikes = parseInt(likesCount.textContent);
        likesCount.textContent = currentLikes + 1;
        
        // Add animation effect
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
    });
});

// Add event listeners to read more links
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Full article would open here!');
    });
});