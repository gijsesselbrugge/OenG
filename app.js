// Select all sliders
const sliders = document.querySelectorAll('.slider');

// Iterate over each slider
sliders.forEach(slider => {
  // Find the corresponding container for each slider
  const container = slider.closest('.container');

  // Add input event listener to each slider
  slider.addEventListener('input', (e) => {
    // Set the position variable for the corresponding container
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});
