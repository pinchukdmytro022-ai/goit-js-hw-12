import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const fetchImages = async (query, page) => {
  const axiosOptions = {
    params: {
      key: '55690304-17dcdc78479c7615073810898',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  };

  const response = await axios.get('api/', axiosOptions);

  return response.data;
};