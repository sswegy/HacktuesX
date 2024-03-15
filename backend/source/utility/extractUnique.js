import fs from "fs"; 

// Function to read JSON file and extract unique scientific names
function getUniqueScientificNames(filePath) {
    try {
        // Read the JSON file
        const data = fs.readFileSync(filePath);
        const jsonData = JSON.parse(data);

        // Array to store unique scientific names
        const uniqueNames = [];

        // Iterate through each item in the JSON data
        for (const item of jsonData) {
            // Assuming the JSON structure has a key named 'scientificName'
            const scientificName = item.scientificName;

            // Check if the scientific name is not already in the uniqueNames array
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

// Provide the path to your JSON file
const filePath = 'backend/data/extractedData.json';

// Call the function to get unique scientific names and log the result
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