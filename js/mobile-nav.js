document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const dropdownNav = document.querySelector('.dropdown-nav');

  if (navToggle && dropdownNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      dropdownNav.classList.toggle('open');
    });

    dropdownNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', false);
        dropdownNav.classList.remove('open');
      });
    });
  }
}); 