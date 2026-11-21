(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('main .view').forEach((section) => {
    section.querySelectorAll(':scope > :not(script)').forEach((element) => {
      element.classList.add('reveal-item');
    });
  });

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' });

    document.querySelectorAll('.reveal-item').forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal-item').forEach((element) => element.classList.add('revealed'));
  }

  const setPageMeta = () => {
    const hash = location.hash || '#home';
    document.querySelectorAll('#nav a').forEach((link) => {
      const active = link.getAttribute('href') === hash;
      link.setAttribute('aria-current', active ? 'page' : 'false');
    });
  };

  window.addEventListener('hashchange', setPageMeta);
  setPageMeta();
})();
