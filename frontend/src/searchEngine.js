const axios = require('axios');

async function searchImages(query) {
    const apiKey = 'AIzaSyCilwwxSr_t0IND_CxVgkvCUlp0z2Tw3kw'; // Replace with your Google API Key
    const searchEngineId = 'd1d8a77927442467a'; // Replace with your Custom Search Engine ID
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

// Example usage:
const query = 'Periophthalmus barbarus';
searchImages(query)
    .then(image => {
        if (image) {
            console.log('Image:', image);
            // Here you can display the image in your preferred way
        } else {
            console.log('No image found for the query:', query);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
