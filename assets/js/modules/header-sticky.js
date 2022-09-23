const headerSticky = () => {
  const header = document.querySelector('header'),
    bodyRect = document.body.getBoundingClientRect();

  if (bodyRect.top < 0) header.classList.add('fixed');
  window.addEventListener('scroll', () => header.classList.toggle('fixed', window.scrollY > 0));
};

export default headerSticky;
