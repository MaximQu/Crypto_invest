const faq = () => {
  const items = document.querySelectorAll('.faq__item');

  items.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
    });
  });
};

export default faq;
