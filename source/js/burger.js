const navigation = document.querySelector(`.navigation`);
const burgerToggle = document.querySelector(`.burger`);
const menuLinks = document.querySelectorAll(`.navigation__link`);

const burgerClickHandler = () => {
  burgerToggle.classList.toggle(`burger--active`);
  navigation.classList.toggle(`navigation--active`);
  document.body.classList.toggle(`stop-scroll`);
};

const linksClickHandler = () => {
  burgerToggle.classList.remove(`burger--active`);
  navigation.classList.remove(`navigation--active`);
  document.body.classList.remove(`stop-scroll`);
};

// при клике на любую из ссылок бургер закрывается
const closeBurger = () => {
  menuLinks.forEach((link) => {
    link.addEventListener(`click`, linksClickHandler);
  })
};

const initBurger = () => {
  burgerToggle.addEventListener(`click`, burgerClickHandler);
  closeBurger();
};

export { initBurger }
