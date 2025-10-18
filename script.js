// ====== Toggle Mobile Menu ======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ====== Contact Form ======
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});

// ====== Dark / Light Mode Toggle ======
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ====== Scroll Animation ======
const fadeElements = document.querySelectorAll('.fade-in, .slide-up');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    if (rect < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
