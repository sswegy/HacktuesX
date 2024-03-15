import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDescription(query) {
    const baseUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary'
    const endpoint = `${baseUrl}/${encodeURIComponent(query)}`

    try {
        const response = await axios.get(endpoint)
        return response.data.extract
    } catch (error) {
        // console.log("error")
    }
}

export default async function getImageAndDescription(query) {
    const apiKey = process.env.apiKey
    const searchEngineId = process.env.searchEngineId
    const baseUrl = 'https://www.googleapis.com/customsearch/v1'
    const endpoint = `${baseUrl}?key=${apiKey}&cx=${searchEngineId}&searchType=image&q=${encodeURIComponent(query)}`

    try {
        await delay(250);
        const response = await axios.get(endpoint);
        const firstItem = response.data.items[0];
        if (firstItem) {
            return {
                url: firstItem.link,
                description: await fetchDescription(query)
            }
        } else {
            console.error('No images found for the query:', query)
        }
    } catch (error) {
        console.error('Error fetching images:', error)
    }
}