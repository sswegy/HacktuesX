import fs from "fs"; 

function getUniqueScientificNames(filePtah) {
    try {
        const data = fs.readFileSync(filePath);
        const jsonData = JSON.parse(data);

        const uniqueNames = [];

        for (const item of jsonData) {
            const scientificName = item.scientificName;

            if (!uniqueNames.includes(scientificName)) {
                uniqueNames.push(scientificName);
            }
        }

        return uniqueNames;
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
}

const filePath = 'backend/data/extractedData.json';

const uniqueScientificNames = getUniqueScientificNames(filePath);
console.log('Unique Scientific Names:', uniqueScientificNames);

const outputFilePath = 'backend/data/unique_names.json'; 

const uniqueNamesJSON = JSON.stringify(uniqueScientificNames, null, 2);

fs.writeFile(outputFilePath, uniqueNamesJSON, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log(`Unique scientific names saved to ${outputFilePath}`);
});
export default getUniqueScientificNames