// src/main.js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import {
  clearGallery,
  renderGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const sbmForm = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const onFormSbm = async event => {
  event.preventDefault();

  const query = sbmForm.elements.user_query.value.trim();

  if (!query) {
    iziToast.show({
      message: '❌ Please enter a search query',
      color: 'red',
      position: 'topRight',
    });
    return;
  }

  clearGallery(gallery);
  showLoader(loader);

  try {
    const data = await fetchImages(query);

    if (data.total === 0) {
      iziToast.show({
        message:
          '❌ Sorry, there are no images matching your search query. Please try again!',
        color: 'red',
        position: 'topRight',
      });
    } else {
      renderGallery(data.hits, gallery);
    }
  } catch (error) {
    console.error(error);
    iziToast.show({
      message: '❌ Something went wrong. Try again later.',
      color: 'red',
      position: 'topRight',
    });
  } finally {
    hideLoader(loader);
    sbmForm.reset();
  }
};

sbmForm.addEventListener('submit', onFormSbm);