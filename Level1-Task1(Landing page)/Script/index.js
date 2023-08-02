// For the navbar to scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;
  
    if (scrollY > 0) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
  });