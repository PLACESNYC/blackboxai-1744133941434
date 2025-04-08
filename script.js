// Main JavaScript for Airbnb Clone

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date pickers
    initDatePickers();
    
    // Setup event listeners
    setupEventListeners();
});

function initDatePickers() {
    // Set min date to today for check-in
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach(input => {
        input.min = today;
    });
}

function setupEventListeners() {
    // Search form submission
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const location = document.querySelector('.search-location').value;
            if (!location) {
                alert('Please enter a location');
                return;
            }
            window.location.href = 'search.html?location=' + encodeURIComponent(location);
        });
    }

    // Listing card clicks
    document.querySelectorAll('.listing-card').forEach(card => {
        card.addEventListener('click', function() {
            window.location.href = 'listing.html';
        });
    });
}

// Image gallery functionality
function initImageGallery() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage && thumbnails) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src;
            });
        });
    }
}