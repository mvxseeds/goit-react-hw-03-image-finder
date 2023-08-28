import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const getImages = async (searchQuery, page=1) => {
  const perPage = 12;

  try {
    const response = await axios.get('/api', {
      params: {
        q: searchQuery,
        page: page,
        key: '33013185-bcf0c4849b088c5c00f112ab1',
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: perPage,
      },
    });

    if (response.data.total === 0) {
      throw 'ErrorNoResult';
    } else if (response.data.totalHits < page * perPage) {
      throw 'ErrorOutOfRange';
    } else {
      return response.data.hits;
    }
  } catch (error) {
    if ('ErrorNoResult') {
      new Error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else if ('ErrorOutOfRange') {
      new Error("We're sorry, but you've reached the end of search results.");
    }
  }
};

const api = { getImages };

export default api;
