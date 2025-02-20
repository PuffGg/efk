// Sample blog post data
const blogPosts = [
    {
        id: 1,
        title: "Our Products Guides and Tutorials",
        author: "Jacob Dickens",
        date: "2025-01-16",
        category: "products",
        thumbnail: "guide.PNG",
        excerpt: "Our products empower communities through sustainable farming, nutrition, and development. From organic poul...",
    },
    {
        id: 2,
        title: "Behind the Stories: Success, Teamwork, and Our Journey",
        author: "Jane Smith",
        date: "2025-01-07",
        category: "stories",
        thumbnail: "stories.jpg",
        excerpt: "Discover the stories that define us—customer success that inspires, behind-the-scenes glimpses of our dedicated team in action, and ...",
    },
    {
        id: 3,
        title: "Mindful Living: A Guide to Better Life",
        author: "Mark Johnson",
        date: "2025-01-06",
        category: "travel",
        thumbnail: "nature.png",
        excerpt: "Explore practical tips for living a more mindful and balanced life...",
    }
];

// Function to create blog post cards
function createPostCard(post) {
    return `
        <article class="post-card">
            <img src="${post.thumbnail}" alt="${post.title}" class="post-thumbnail">
            <div class="post-content">
                <div class="post-meta">
                    <span>${post.author}</span> • 
                    <span>${new Date(post.date).toLocaleDateString()}</span> • 
                    <span>${post.category}</span>
                </div>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="blogdisplay.html?id=${post.id}" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

// Function to update recent posts widget
function updateRecentPosts() {
    const recentPostsList = document.querySelector('.recent-posts');
    const recentPosts = blogPosts.slice(0, 5);
    
    recentPostsList.innerHTML = recentPosts.map(post => `
        <li><a href="?id=${post.id}" data-id="${post.id}" class="recent-link">${post.title}</a></li>
    `).join('');
}

// Function to update categories widget
function updateCategories() {
    const categoriesList = document.querySelector('.categories');
    const categories = [...new Set(blogPosts.map(post => post.category))];
    
    categoriesList.innerHTML = categories.map(category => `
        <li><a href="#" data-category="${category}" class="category-link">${category.charAt(0).toUpperCase() + category.slice(1)}</a></li>
    `).join('');
}

// Function to filter posts by category
function filterPosts(category) {
    const filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);
    
    const blogPostsSection = document.querySelector('.blog-posts');
    blogPostsSection.innerHTML = filteredPosts.map(createPostCard).join('');
}

// Function to display a single post based on its ID (optional for blog display pages)
function displaySinglePost(postId) {
    const post = blogPosts.find(p => p.id === parseInt(postId));
    if (post) {
        const blogPostsSection = document.querySelector('.blog-posts');
        blogPostsSection.innerHTML = createPostCard(post);
    } else {
        alert("Post not found.");
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    filterPosts('all');
    updateRecentPosts();
    updateCategories();

    // Handle clicks on categories
    document.querySelector('.categories').addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.classList.contains('category-link')) {
            e.preventDefault();
            const category = e.target.dataset.category;
            filterPosts(category);
        }
    });

    // Handle clicks on recent posts links
    document.querySelector('.recent-posts').addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.classList.contains('recent-link')) {
            e.preventDefault();
            const postId = e.target.dataset.id;
            displaySinglePost(postId);
        }
    });

    // Search functionality
    document.querySelector('.search-bar').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm)
        );
        const blogPostsSection = document.querySelector('.blog-posts');
        blogPostsSection.innerHTML = filteredPosts.map(createPostCard).join('');
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset();
    });
});


