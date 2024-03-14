import "./App.css";
import React from "react";
import GlobeMap from "./components/globeMap";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <GlobeMap />
    </div>
  );
}

export default App;
