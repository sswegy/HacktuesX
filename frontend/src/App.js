import "./App.css";
import React, { useState } from "react";
import GlobeMap from "./components/globeMap.js";
import SearchBar from "./components/searchBar.js";
import SideInfoBar from "./components/sideInfoBar.js";
import SideInfoCell from "./components/sideInfoCell.js";


function App() {
  const [sideInfoVisible, setSideInfoVisible] = useState(false);
  const [currentPolygonName, setCurrentPolygonName] = useState("");


  return (
    <div className="container">
      <div className="searchbar-container">
        <SearchBar />
      </div>
      <div className="content-container">
        <div className="globemap-container">
          <GlobeMap setSideInfoVisible={setSideInfoVisible} setCurrentPolygonName={setCurrentPolygonName}/>
        </div>
        {sideInfoVisible ?
          <SideInfoBar oceanName={currentPolygonName}>
            <SideInfoCell />
            <SideInfoCell />
          </SideInfoBar>
          : <></>}
      </div>
    </div>
  );
}

export default App;
