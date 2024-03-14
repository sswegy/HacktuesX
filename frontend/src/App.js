import "./App.css";
import React from "react";
import GlobeMap from "./components/globeMap.js";
import SearchBar from "./components/searchBar.js";
import SideInfoButton from "./components/sideInfoButton.js";

function App() {
  return (
    <div className="container">
      <div className="searchbar-container">
        <SearchBar />
        <SideInfoButton />
      </div>
      <GlobeMap />
    </div>
  );
}

export default App;
