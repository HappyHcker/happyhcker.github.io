// Alert on page load to simulate a news alert popup
window.addEventListener('load', function() {
    alert("🚨 Breaking News: UFOs spotted over New York City!");
});

// Functionality for "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Full article coming soon! Stay tuned.");
    });
});
