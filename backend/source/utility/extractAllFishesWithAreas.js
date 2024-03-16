import database from "../database/database.js";

async function getFishList() {
    try {
        const scientificNames = [];
        const result = await database.query(`SELECT DISTINCT scientificName FROM fishes WHERE locality != 'unknown';`);

        result.forEach(row => {
            scientificNames.push(row.scientificName); 
        });

        console.log(scientificNames);

    } catch (error) {
        console.error(`Error querying database for area:`, error);
        return [];
    }
}

getFishList();