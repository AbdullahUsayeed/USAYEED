// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    const isVisible = navMenu.classList.contains('active');
    
    if (isVisible) {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navMenu.classList.add('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Modal Functionality
const openSpecsBtn = document.getElementById('openSpecs');
const specsModal = document.getElementById('specsModal');
const closeModalBtn = document.getElementById('closeModal');

// Open modal when clicking on product visual
if (openSpecsBtn) {
    openSpecsBtn.addEventListener('click', () => {
        specsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close modal when clicking close button
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        specsModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Close modal when clicking on overlay
if (specsModal) {
    specsModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            specsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && specsModal && specsModal.classList.contains('active')) {
        specsModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('USAYEED website loaded');
});