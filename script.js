const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const year = document.querySelector('#year');
const signupForm = document.querySelector('.signup-form');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = signupForm.querySelector('button');
    const input = signupForm.querySelector('input');

    if (!input.value) {
      input.focus();
      return;
    }

    button.textContent = 'Saved for later';
    button.disabled = true;
    signupForm.querySelector('p').textContent = 'Placeholder only: connect this form to your email platform before launch.';
  });
}
