import suggestAutoFill from "../utility/suggestAutoFill.js";
import React, { useState } from 'react';
import { fetchSearchData } from "../utility/requestHandler.js";
import { polygonSelectResult } from "./globeMap.js";

export let searchedFishPolygon = [[], null];

export const setSearchedFishPolygon = (data) => {
  searchedFishPolygon = data;
}

export default function SearchBar({ setSideMoreInfoVisible, setFishName, setFishData, setFishImageSource }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestionText, setSuggestionText] = useState([]);

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      searchedFishPolygon = await fetchSearchData(inputValue)
      console.log(searchedFishPolygon);
      setSideMoreInfoVisible({ fishInfo:{ scientificName: searchedFishPolygon[1].scientificName, description: searchedFishPolygon[1].description, image: searchedFishPolygon[1].image }, isVisible: true});
      setFishName(searchedFishPolygon[1].scientificName);
      setFishData(searchedFishPolygon[1].description);
      setFishImageSource(searchedFishPolygon[1].image);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length > 1) {
      setSuggestionText(suggestAutoFill(event.target.value));
    } else {
      setSuggestionText([]);
    }
  };

  const fillSearchBar = (item) => {
    setInputValue(item);
    setSuggestionText([]);
  }

  return (
    <>
      <div className="searchBarDiv">
        <svg xmlns="http://www.w3.org/2000/svg" className="search-svg-icon bi-search" viewBox="0  0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
        </svg>
        <input
          className="searchbar"
          type="text"
          placeholder="Search..."
          value={inputValue}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
        />
      </div>
      {suggestionText.length > 0 && (
        <table className="searchTableBody">
          <tbody>
            {suggestionText.map((item, index) => (
              <tr>
                <td className="searchTableElement" onClick={() => { fillSearchBar(item) }}>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}