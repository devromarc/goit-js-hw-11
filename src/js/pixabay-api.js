export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43874440-8b53352af7fd71ba131d69070';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
