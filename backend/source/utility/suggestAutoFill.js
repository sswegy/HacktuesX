import { readFileSync } from 'fs';

function suggestAutoFill(inputString, filename = 'strings.json', numSuggestions = 5) {
    try {
        const jsonString = readFileSync(filename, 'utf8');
        const jsonArray = JSON.parse(jsonString);
        const lowerInputString = inputString.toLowerCase();
        const suggestions = jsonArray.filter(str => str.toLowerCase().startsWith(lowerInputString)).slice(0, numSuggestions);
        return suggestions;
    } catch (error) {
        console.error("Error reading or parsing the file:", error.message);
        return [];
    }
}


console.log(suggestAutoFill("dario", "unique_names.json"))