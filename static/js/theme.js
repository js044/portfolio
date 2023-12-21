const body = document.body;
const lightModeToggle = document.getElementById('light-mode-toggle');

// Check if there's a saved mode preference in localStorage
const savedMode = localStorage.getItem('lightMode');
if (savedMode) {
  body.classList.add(savedMode);
} else {
  // Set a default mode if no saved mode is found
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode) {
    body.classList.add('darkmode');
    localStorage.setItem('lightMode', 'darkmode');
  } else {
    body.classList.add('lightmode');
    localStorage.setItem('lightMode', 'lightmode');
  }
}

// Function to toggle between light and dark modes
function toggleMode() {
  if (body.classList.contains('darkmode')) {
    body.classList.remove('darkmode');
    body.classList.add('lightmode');
    localStorage.setItem('lightMode', 'lightmode');
  } else {
    body.classList.remove('lightmode');
    body.classList.add('darkmode');
    localStorage.setItem('lightMode', 'darkmode');
  }
}

// Event listener for the mode toggler button
lightModeToggle.addEventListener('click', toggleMode);
