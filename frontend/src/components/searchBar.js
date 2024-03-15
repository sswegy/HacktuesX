import suggestAutoFill from "../utility/suggestAutoFill.js";
import React, { useState, useRef } from 'react';
import {fetchSearchData} from "../utility/requestHandler.js";



export default function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const [suggestionText, setSuggestionText] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const suggestionsListRef = useRef(null);
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log(fetchSearchData(inputValue)[0])
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
  
    const handleTabPress = (event) => {
        if (event.key === 'Tab' && suggestionText.length > 0) {
          event.preventDefault();
          suggestionsListRef.current.focus(); // Focus on suggestions list
          setSelectedIndex(0); // Start from the first suggestion when tab is pressed
        }
    };
    
    const handleSuggestionKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            const nextIndex = (selectedIndex + 1) % suggestionText.length;
            setInputValue(suggestionText[nextIndex]);
            setSelectedIndex(nextIndex);
            // Avoid losing focus from input when cycling through suggestions with tab
            event.stopPropagation();
        }
    };
      
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
            onKeyDown={handleTabPress}
          />
        </div>
        {suggestionText.length > 0 && (
          <table className="searchTableBody" tabIndex="0" ref={suggestionsListRef} onKeyDown={handleSuggestionKeyDown} // Attach handleSuggestionKeyDown to onKeyDown
        >
            <tbody>
              {suggestionText.map((item, index) => (
                <tr key={index} className={selectedIndex === index ? 'selected' : ''}>
                    <td className="searchTableElement" onClick={() => { fillSearchBar(item) }}>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
