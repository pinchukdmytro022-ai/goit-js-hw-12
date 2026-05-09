import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export const createGalleryCardTemplate = img => `
  <li class="gallery-card">
    <a class="gallery-link" href="${img.largeImageURL}">
      <img 
        class="gallery-img" 
        src="${img.webformatURL}" 
        alt="${img.tags}" 
        loading="lazy" 
      />
    </a>

    <div class="card-info">
      <p><b>Likes</b> ${img.likes}</p>
      <p><b>Views</b> ${img.views}</p>
      <p><b>Comments</b> ${img.comments}</p>
      <p><b>Downloads</b> ${img.downloads}</p>
    </div>
  </li>
`;

export const renderGallery = (images, galleryEl) => {
  const markup = images.map(img => createGalleryCardTemplate(img)).join('');
  galleryEl.innerHTML = markup;
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-link', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
};

export const clearGallery = galleryEl => {
  galleryEl.innerHTML = '';
};

export const showLoader = loaderEl => {
  loaderEl.classList.add('is-open');
};

export const hideLoader = loaderEl => {
  loaderEl.classList.remove('is-open');
};