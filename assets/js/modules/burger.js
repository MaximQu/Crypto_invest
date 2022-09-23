const burgerMenu = () => {
   const burger = document.querySelector('.burger__menu'),
      nav = document.querySelector('.nav'),
      navLinks = nav.querySelectorAll('.nav__link');

   burger.addEventListener('click', () => {
      nav.classList.toggle('active');
      burger.classList.toggle('active')
   });

   navLinks.forEach((navLink) => {
      navLink.addEventListener('click', () => {
         nav.classList.remove('active')
         burger.classList.remove('active')
      })
   });
};
export default burgerMenu