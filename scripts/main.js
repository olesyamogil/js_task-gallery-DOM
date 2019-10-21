'use strict';

const initGallery = function(element) {
  const thumbsList = element.querySelector('.gallery__list');
  const largeImg = element.querySelector('.gallery__large-img');

  thumbsList.addEventListener('click', (e) => {
    e.preventDefault();
    const currentThumb = e.target.closest('.list-item__link');
    if (!currentThumb || !element.contains(currentThumb)) {
      return;
    }
    const newPath = currentThumb
      .closest('.list-item__link')
      .getAttribute('href');
    largeImg.setAttribute('src', newPath);
  });
};

initGallery(document.querySelector('.gallery'));
