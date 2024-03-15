import "./App.css";
import React, { useState } from "react";
import GlobeMap from "./components/globeMap.js";
import SearchBar from "./components/searchBar.js";
import SideInfoBar from "./components/sideInfoBar.js";


function App() {
  const [sideInfoVisible, setSideInfoVisible] = useState(false);

  const showSideInfo = () => {
    setSideInfoVisible(!sideInfoVisible);
  }

  return (
    <div className="container">
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="content-container">
        <div className="globemap-container">
          <GlobeMap SideInfoVisible={sideInfoVisible} setSideInfoVisible={showSideInfo} />
        </div>
        <div className="side-info-bar-container">
          {sideInfoVisible ? <SideInfoBar /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default App;
