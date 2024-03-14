import "./App.css";
import React from "react";
import GlobeMap from "./components/globeMap.js";
import SearchBar from "./components/searchBar.js";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <GlobeMap />
    </div>
  );
}

export default App;
