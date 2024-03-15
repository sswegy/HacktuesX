import axios from 'axios';
import process from "../../../backend/process.js"

const baseURL = `${process.host}:${process.PORT}`

async function fetchSearchData(name) {
    try {
        const response = await axios.get(`http://${baseURL}/fishes/areaFishByName/${name}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function fetchSideBarData(area) {
    try {
        const response = await axios.get(`http://${baseURL}/fishes/area/${area}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}