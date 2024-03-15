import { useState } from "react";
import suggestAutoFill from "../../../backend/data/suggestAutoFill";


export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert(event.target.value);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(suggestAutoFill(inputValue, "unique_names.json"))
  };


  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="search-svg-icon bi-search"
        viewBox="0  0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
      </svg>
      <input
        className="searchbar"
        type="text"
        placeholder="Search..."
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
    </>
  );
}
