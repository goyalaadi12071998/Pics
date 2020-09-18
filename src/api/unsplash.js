import axios from 'axios';

export async function searchImages(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers: {
            Authorization: 'Client-ID O49fJJ676DqElCNxhoDje9ZWw6Q1o7MibMxS-v9hCkE'
        }
    });
    return response.data.results;
}
