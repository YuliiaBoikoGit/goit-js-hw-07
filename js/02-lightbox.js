import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ original, description, preview }) => {
        return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    }).join('');
};

function onGalleryItemsContainerClick(event) {
    event.preventDefault();
};

galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);

const lightboxGallery = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
});

lightboxGallery.on('show.simplelightbox');


