document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const lightModeToggle = document.getElementById('light-mode-toggle');

  // Check if there's a saved mode preference in localStorage
  const savedMode = localStorage.getItem('lightMode');
  if (savedMode) {
    body.classList.add(savedMode);
    updateFaviconLink(savedMode);
  } else {
    // Set a default mode if no saved mode is found
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultMode = prefersDarkMode ? 'darkmode' : 'lightmode';
    body.classList.add(defaultMode);
    localStorage.setItem('lightMode', defaultMode);
    updateFaviconLink(defaultMode);
  }

  // Function to toggle between light and dark modes
  function toggleMode() {
    const currentMode = body.classList.contains('darkmode') ? 'darkmode' : 'lightmode';
    const newMode = currentMode === 'darkmode' ? 'lightmode' : 'darkmode';

    body.classList.remove(currentMode);
    body.classList.add(newMode);
    localStorage.setItem('lightMode', newMode);
    updateFaviconLink(newMode);
  }

  // Event listener for the mode toggler button
  lightModeToggle.addEventListener('click', toggleMode);

  // Function to update the favicon link based on the current theme
  function updateFaviconLink(theme) {
    const faviconLink = document.getElementById('favicon-link');
    if (faviconLink) {
      const faviconPath = `/images/icons/${theme}-favicon.svg`;
      faviconLink.setAttribute('href', faviconPath);
    }
  }
});
