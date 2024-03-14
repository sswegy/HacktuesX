const axios = require('axios');

export async function searchImages(query) {
    const apiKey = 'AIzaSyCilwwxSr_t0IND_CxVgkvCUlp0z2Tw3kw';
    const searchEngineId = 'd1d8a77927442467a';
    const baseUrl = 'https://www.googleapis.com/customsearch/v1';
    const endpoint = `${baseUrl}?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(endpoint);
        const firstItem = response.data.items[0];
        if (firstItem) {
            return {
                url: firstItem.link
            };
        } else {
            console.error('No images found for the query:', query);
            return null;
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        return null;
    }
}
