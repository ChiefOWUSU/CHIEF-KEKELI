// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll-to-Top Button
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.classList.add('scroll-to-top');
  
  // Add scroll-to-top button to the body
  document.body.appendChild(scrollToTopBtn);
  
  // Show/Hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  // Scroll to top functionality
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Dynamic year in footer
  const footerYear = new Date().getFullYear();
  document.querySelector('footer p').innerHTML = `© ${footerYear} My Portfolio | Created by [Your Name]`;
  
  