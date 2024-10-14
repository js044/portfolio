// Get the button element
var backToTopButton = document.getElementById("back-to-top");

// Function to scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Function to handle button opacity
function handleButtonOpacity() {
  if (window.pageYOffset > 300) {
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
  }
}

// Show/hide the button based on scroll position
window.addEventListener("scroll", function() {
  handleButtonOpacity();
});

// Attach click event to scroll to top when the button is clicked
backToTopButton.addEventListener("click", scrollToTop);

// Initial check for button visibility on page load
handleButtonOpacity();
