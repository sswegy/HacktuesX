import "./App.css";
import React, { useState } from "react";
import GlobeMap from "./components/globeMap.js";
import SearchBar from "./components/searchBar.js";
import SideInfoBar from "./components/sideInfoBar.js";
import SideMoreInfoBar from "./components/sideMoreInfoBar.js";
import SideInfoCell from "./components/sideInfoCell.js";
import { polygonSelectResult } from "./components/globeMap.js";



function App() {
  const [sideInfoVisible, setSideInfoVisible] = useState(false);
  const [sideMoreInfoVisible, setSideMoreInfoVisible] = useState({ fishInfo: polygonSelectResult[0], isVisible: false });
  const [currentPolygonName, setCurrentPolygonName] = useState("");
  const [fishName, setFishName] = useState("");
  const [fishData, setFishData] = useState("");
  const [fishImageSource, setFishImageSource] = useState("");
  const [idx, setIdx] = useState(0);


  console.log(sideMoreInfoVisible);
  console.log(polygonSelectResult);

  return (
    <div className="container">
      <div className="searchbar-container">
        <SearchBar setSideMoreInfoVisible={setSideMoreInfoVisible} setFishData={setFishData} setFishImageSource={setFishImageSource} setFishName={setFishName} />
      </div>
      <div className="content-container">
        <div className="globemap-container">
          <GlobeMap setSideInfoVisible={setSideInfoVisible} setCurrentPolygonName={setCurrentPolygonName} />
        </div>
        {sideInfoVisible ?
          <SideInfoBar oceanName={currentPolygonName}>
            {polygonSelectResult.map((item, index) => (
              <SideInfoCell index={index} fishName={item.scientificName} fishImageSource={item.image} sideMoreInfoVisible={sideMoreInfoVisible} setSideMoreInfoVisible={setSideMoreInfoVisible} />
              ))}
          </SideInfoBar>
          : <></>}
          {sideMoreInfoVisible.isVisible ?
          <SideMoreInfoBar index={idx} fishData={sideMoreInfoVisible.fishInfo.description} fishImageSource={sideMoreInfoVisible.fishInfo.image} fishName={sideMoreInfoVisible.fishInfo.scientificName} setSideMoreInfoVisible={setSideMoreInfoVisible} /> : <></>}
      </div>
    </div>
  );
}

export default App;
