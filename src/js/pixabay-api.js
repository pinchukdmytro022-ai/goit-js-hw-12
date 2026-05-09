import axios from 'axios';

const API_KEY = '55690304-17dcdc78479c7615073810898';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 40,
    },
  });
  return response.data;
};