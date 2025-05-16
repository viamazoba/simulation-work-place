/* eslint-disable */
Drupal.behaviors.cards_section = {
  attach(context) {
    const viewport = context.querySelector('.cards-slider__viewport');
    const items = Array.from(viewport.querySelectorAll('.cards-slider__item'));
    const prevBtn = context.querySelector('.cards-slider__btn--prev');
    const nextBtn = context.querySelector('.cards-slider__btn--next');

    const VISIBLE = 3;
    let index = 0;

    function updateView() {
      items.forEach((item, i) => {
        item.style.display = i >= index && i < index + VISIBLE ? '' : 'none';
      });
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index >= items.length - VISIBLE;
    }

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateView();
      }
    });
    nextBtn.addEventListener('click', () => {
      if (index < items.length - VISIBLE) {
        index++;
        updateView();
      }
    });

    items.forEach((item, i) => {
      item.addEventListener('click', () => {
        console.log(`Has clickeado la card número ${i + 1}`);
      });
    });

    updateView();
  },
};
