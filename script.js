// Simple scroll reveal effect
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.3;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    }
  });
});
