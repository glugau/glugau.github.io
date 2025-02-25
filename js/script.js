// Parallax effect for landing overlay (subtle movement)
document.addEventListener('mousemove', (e) => {
    const overlay = document.querySelector('#landing .overlay');
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 10;
    const y = (e.clientY / innerHeight - 0.5) * 10;
    overlay.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('.nav a, .cta').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  