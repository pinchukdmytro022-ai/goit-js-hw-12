import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';

import {
  renderGallery,
  appendGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreBtn,
  hideLoadMoreBtn,
  getGalleryItemsCount,
  getCardHeight,
} from './js/render-functions';

const sbmForm = document.querySelector('.search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let searchedValue = '';
let page = 1;

const showErrorMessage = message => {
  iziToast.error({
    message,
    position: 'topRight',
  });
};

const onFormSbm = async event => {
  event.preventDefault();

  searchedValue = sbmForm.elements.user_query.value.trim();

  if (!searchedValue) {
    showErrorMessage(
      'Sorry, there are no images matching your search query. Please try again!'
    );

    return;
  }

  page = 1;

  clearGallery();
  hideLoadMoreBtn();
  showLoader();

  try {
    const response = await fetchImages(searchedValue, page);

    if (response.totalHits === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );

      return;
    }

    renderGallery(response.hits);

    sbmForm.reset();

    const currentItems = getGalleryItemsCount();

    if (currentItems < response.totalHits) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();

      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        color: 'yellow',
        position: 'topRight',
      });
    }
  } catch (err) {
    iziToast.error({
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });

    console.log(err);
  } finally {
    hideLoader();
  }
};

const loadMorePhoto = async () => {
  page += 1;

  hideLoadMoreBtn();
  showLoader();

  try {
    const response = await fetchImages(searchedValue, page);

    appendGallery(response.hits);

    const cardHeight = getCardHeight();

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const currentItems = getGalleryItemsCount();

    if (currentItems >= response.totalHits) {
      hideLoadMoreBtn();

      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        color: 'yellow',
        position: 'topRight',
      });
    } else {
      showLoadMoreBtn();
    }
  } catch (err) {
    iziToast.error({
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });

    console.log(err);
  } finally {
    hideLoader();
  }
};

sbmForm.addEventListener('submit', onFormSbm);
loadMoreBtnEl.addEventListener('click', loadMorePhoto);