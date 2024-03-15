import { useState, useEffect } from "react";
import suggestAutoFill from "../utility/suggestAutoFill.js";


export default function SearchBar() {
  const [inputValue, setInputValue] = useState("")
  const [suggestionText, setSuggestionText] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert(event.target.value);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    if (event.target.value.length > 1) {
      console.log(suggestAutoFill(event.target.value));
      setSuggestionText(suggestAutoFill(event.target.value))
    } else {
      setSuggestionText([]);
    }
  };


  return (
    <>
      <div className="searchBarDiv">
        <svg xmlns="http://www.w3.org/2000/svg" className="search-svg-icon bi-search" viewBox="0  0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
        </svg>
        <input
          className="searchbar"
          type="text"
          placeholder="Search..."
          value = {inputValue}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
        />
      </div>
      {suggestionText.length > 0 && (
        <table className="searchTableBody">
          <tbody>
            {suggestionText.map((item, index) => (
              <tr key={index}>
                <td className="searchTableElement" onClick={() => {setInputValue(item)}}>{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
