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

export const createGalleryCardTemplate = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
    <li class="gallery-card">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>

      <div class="gallery-info">
        <div class="gallery-info-item">
          <p class="gallery-info-title">Likes</p>
          <p class="gallery-info-text">${likes}</p>
        </div>

        <div class="gallery-info-item">
          <p class="gallery-info-title">Views</p>
          <p class="gallery-info-text">${views}</p>
        </div>

        <div class="gallery-info-item">
          <p class="gallery-info-title">Comments</p>
          <p class="gallery-info-text">${comments}</p>
        </div>

        <div class="gallery-info-item">
          <p class="gallery-info-title">Downloads</p>
          <p class="gallery-info-text">${downloads}</p>
        </div>
      </div>
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