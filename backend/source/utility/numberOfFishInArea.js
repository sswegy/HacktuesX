import getUniqueScientificNames from "../utility/extractUnique.js"
import database from "../database/database.js";
import coordinates from "../../../frontend/src/data/coordinates.js";
async function getFishCountForArea(area) {
    try {
        const result = await database.query(`Select * FROM fishes WHERE area = '${area}'`);
        
        return result[0].length;
    } catch (error) {
        console.error(`Error querying database for area ${area}:`, error);
        return 0;
    }
}

async function getFishCountsForAreas() {
    const counts = {};

    try {
        for (let keys in coordinates) {
            const count = await getFishCountForArea(keys);
            counts[keys] = count;
            console.log(keys,count);
        }

        return counts;
    } catch (error) {
        console.error('Error getting fish counts for areas:', error);
        return {};
    }
}

getFishCountsForAreas(getUniqueScientificNames('backend/data/extractedData.json'));