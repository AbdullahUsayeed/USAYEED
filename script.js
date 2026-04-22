// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('nav ul');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isVisible = navMenu.classList.contains('active');

    if (isVisible) {
      navMenu.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      mobileMenuBtn.setAttribute('aria-label', 'Open menu');
    } else {
      navMenu.classList.add('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
      mobileMenuBtn.setAttribute('aria-label', 'Close menu');
    }
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768 && navMenu) {
      navMenu.classList.remove('active');
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.setAttribute('aria-label', 'Open menu');
      }
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.backgroundColor = window.scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log('USAYEED website loaded');
});
