import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ original, description, preview }) => {
        return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    }).join('');
};

function onGalleryItemsContainerClick(event) {
    event.preventDefault();

    const isImageEl = event.target.classList.contains('gallery__image');

    if (!isImageEl) return;

    const imageElUrl = event.target.dataset.source;

    basicLightbox.create(`
		<img width="1400" height="900" src="${imageElUrl}">
	`).show();
};

galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);

