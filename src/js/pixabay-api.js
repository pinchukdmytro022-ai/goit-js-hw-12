import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export const data = (searchedValue, pages) => {
  const axiosOptions = {
    params: {
      key: '55690304-17dcdc78479c7615073810898',
      q: searchedValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pages,
      per_page: 15,
    },
  };
  return axios.get('api/', axiosOptions);
};