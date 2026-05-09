import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let lightbox = new SimpleLightbox('.gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGalleryCardTemplate = imgDetails => {
  return `
    <li class="gallery-card">
      <a class="gallery-link" href="${imgDetails.largeImageURL}">
        <img
          src="${imgDetails.webformatURL}"
          alt="${imgDetails.tags}"
        />
      </a>
    </li>
  `;
};

export const clearGallery = () => {
  galleryEl.innerHTML = '';
};

export const renderGallery = images => {
  const markup = images
    .map(createGalleryCardTemplate)
    .join('');

  galleryEl.innerHTML = markup;

  lightbox.refresh();
};

export const appendGallery = images => {
  const markup = images
    .map(createGalleryCardTemplate)
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
};

export const showLoader = () => {
  loaderEl.classList.add('is-open');
};

export const hideLoader = () => {
  loaderEl.classList.remove('is-open');
};

export const showLoadMoreBtn = () => {
  loadMoreBtnEl.classList.remove('is-hidden');
};

export const hideLoadMoreBtn = () => {
  loadMoreBtnEl.classList.add('is-hidden');
};

export const getGalleryItemsCount = () => {
  return document.querySelectorAll('.gallery-card').length;
};

export const getCardHeight = () => {
  const card = galleryEl.querySelector('.gallery-card');

  if (!card) return 0;

  return card.getBoundingClientRect().height;
};