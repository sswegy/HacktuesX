import "./App.css";
import React, { useState } from "react";
import GlobeMap from "./components/globeMap.js";
import SearchBar from "./components/searchBar.js";
import SideInfoBar from "./components/sideInfoBar.js";


function App() {
  const [sideInfoVisible, setSideInfoVisible] = useState(false);

  return (
    <div className="container">
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="content-container">
        <div className="globemap-container">
          <GlobeMap setSideInfoVisible={setSideInfoVisible} />
        </div>
        {sideInfoVisible ? <SideInfoBar oceanName={"iwanegrow"} /> : <></>}
      </div>
    </div>
  );
}

export default App;
