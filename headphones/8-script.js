
  const hamburger = document.getElementById('hamburger');
  const closeIcon = document.getElementById('close-icon');
  const navLinks = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  const navItems = document.querySelectorAll('.nav-item');
  const heroContent = document.querySelector('.hero-content');

  // Open menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
    hamburger.classList.add('hide');
    closeIcon.classList.add('show');
    heroContent.classList.add('menu-open');
  });

  // Close menu
  closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    closeIcon.classList.remove('show');
    hamburger.classList.remove('hide');
    heroContent.classList.remove('menu-open');
  });

  // Close menu when any link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      closeIcon.classList.remove('show');
      hamburger.classList.remove('hide');
      heroContent.classList.remove('menu-open');
    });
  });


