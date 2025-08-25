// Toggle between light and dark mode
const toggleButton = document.getElementById('modeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Handle contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for contacting us! We will respond soon.');
  form.reset();
});
