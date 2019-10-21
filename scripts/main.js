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
    const newPath = currentThumb.getAttribute('href');
    largeImg.setAttribute('src', newPath);
  });
};

const gallery = document.querySelector('.gallery');
initGallery(gallery);
