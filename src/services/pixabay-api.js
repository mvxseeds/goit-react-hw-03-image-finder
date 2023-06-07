import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const getImages = async searchQuery => {
    try {
        const response = await axios.get('/api', {
            params: {
                q: searchQuery,
                page: 1,
                key: '33013185-bcf0c4849b088c5c00f112ab1',
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
            }
        })
    } catch (error) {
        console.error(error);
    }
}

const api = { getImages };

export default api;
