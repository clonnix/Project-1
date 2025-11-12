const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.style.position = 'relative'; // Let it scroll with the page
    header.style.top = '0';             // Keep it aligned normally
  } else {
    header.style.position = 'fixed';    // Stay on top when at the top
    header.style.top = '0';
  }
});
