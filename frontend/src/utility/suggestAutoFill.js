import unique_names from "../data/unique_names.js";


export default function suggestAutoFill(inputString, numSuggestions = 5) {
    try {
        const jsonArray = unique_names
        const lowerInputString = inputString.toLowerCase();
        const suggestions = jsonArray.filter(str => str.toLowerCase().startsWith(lowerInputString)).slice(0, numSuggestions);
        return suggestions;
    } catch (error) {
        console.error("Error reading or parsing the file:", error.message);
        return [];
    }
}