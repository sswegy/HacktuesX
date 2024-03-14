import axios from 'axios'


async function fetchDescription(query) {
    const baseUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary';
    const endpoint = `${baseUrl}/${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(endpoint);
        return response.data.extract;
    } catch (error) {
        // console.error('Error fetching description:', error);
    }
}

export default async function getImageAndDescription(query) {
    const apiKey = 'AIzaSyCilwwxSr_t0IND_CxVgkvCUlp0z2Tw3kw'; 
    const searchEngineId = 'd1d8a77927442467a';
    const baseUrl = 'https://www.googleapis.com/customsearch/v1';
    const endpoint = `${baseUrl}?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(query)}`;

    try {
        const response = await axios.get(endpoint);
        const firstItem = response.data.items[0];
        if (firstItem) {
            return {
                url: firstItem.link,
                description: await fetchDescription(query)
            };
        } else {
            console.error('No images found for the query:', query);
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

getImageAndDescription('Periophthalmus barbarus').then(item => {console.log(item.description)})