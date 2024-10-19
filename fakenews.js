//Alert Popup
window.addEventListener('load', function() {
    alert("🚨 Breaking News: Dr. Lee is handsome?");
});

// Functionality for "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("On Maintenance, Please Wait :) ");
    });
});
