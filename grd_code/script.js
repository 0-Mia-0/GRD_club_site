document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-pill, .button, .index-panel a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
