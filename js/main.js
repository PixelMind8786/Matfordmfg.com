/**
 * Matford Manufacturing - Main JavaScript
 * Handles: Mobile navigation, sticky header, smooth scroll, form handling
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const header = document.getElementById('header');

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile nav when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ========================================
  // Sticky Header with Scroll Effect
  // ========================================
  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleScroll() {
    const currentScroll = window.pageYOffset;
    
    if (header) {
      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Contact Form Handling
  // ========================================
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // If using Formspree, let it handle the submission
      // For mailto fallback, uncomment below:
      
      // e.preventDefault();
      // const formData = new FormData(this);
      // const name = formData.get('name');
      // const email = formData.get('email');
      // const message = formData.get('message');
      // const subject = `Enquiry from ${name}`;
      // const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      // window.location.href = `mailto:info@matfordmfg.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // ========================================
  // Lazy Loading for Images
  // ========================================
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach(img => img.classList.add('loaded'));
  }

  // ========================================
  // Video Playback Management
  // ========================================
  const heroVideo = document.querySelector('.hero-video');
  
  if (heroVideo) {
    // Pause video when not visible to save resources
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroVideo.play().catch(() => {
            // Autoplay was prevented, that's okay
          });
        } else {
          heroVideo.pause();
        }
      });
    }, { threshold: 0.25 });

    videoObserver.observe(heroVideo);

    // Handle video loading errors
    heroVideo.addEventListener('error', function() {
      console.warn('Video failed to load, showing poster image');
    });
  }

  // ========================================
  // Animate Elements on Scroll
  // ========================================
  const animateElements = document.querySelectorAll('.feature-card, .service-card, .value-card, .card');
  
  if ('IntersectionObserver' in window && animateElements.length > 0) {
    const animateObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          animateObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
      el.style.opacity = '0';
      animateObserver.observe(el);
    });
  }
});
