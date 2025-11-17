// Animação ao rolar a página
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    } else {
      sec.style.opacity = 0;
      sec.style.transform = 'translateY(50px)';
    }
  });
});
