import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import polygons from "./polygons.js";
import areaNames from "../data/areaNameMap.js"
import { searchedFishPolygon, setSearchedFishPolygon } from "./searchBar.js";
import { fetchSideBarData } from "../utility/requestHandler.js";


export let polygonSelectResult = {};
export const setPolygonSelectResult = (data) => { polygonSelectResult = data; }

export default function GlobeMap({ setSideInfoVisible, setCurrentPolygonName }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [hoveredPolygon, setHoveredPolygon] = useState("");
  const [clickedPolygon, setClickedPolygon] = useState("");

  const globeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const changePolygonColor = (polygon) => {
    if (polygon.name === "world") {
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.01 + ")"
    }

    for (const fish of searchedFishPolygon[0]) {
      if (areaNames[fish.area] === polygon.name) {
        return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.8 + ")"
      }
    }

    if (clickedPolygon === polygon.name) {
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.6 + ")"
    } else if (hoveredPolygon === polygon.name) {
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.2 + ")"
    } else {
      return "rgba(10,10,200,0.2)"
    }
  }

  const changeAltitude = (polygon) => {
    if (polygon.name === "world") {
      return 0.001
    }
    for (const fish of searchedFishPolygon[0]) {
      if (areaNames[fish.area] === polygon.name) {
        return 0.15
      }
    }
    if (clickedPolygon === polygon.name) {
      return 0.1
    } else {
      return 0.04
    }
  }

  const handlePolygonClickRequest = async (polygon) => {
    setPolygonSelectResult(await fetchSideBarData(getKeyByValue(areaNames, polygon.name)));
  }
  
  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      width={width}
      height={height}
      backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
      //backgroundColor="#1A1E2E"

      polygonsData={polygons}
      polygonGeoJsonGeometry={(polygon) => polygon.geometry}
      polygonAltitude={(polygon) => { return changeAltitude(polygon) }}
      polygonSideColor={(polygon) => { return changePolygonColor(polygon) }}
      polygonStrokeColor={(polygon) => { return '#000000'; }}
      polygonCapColor={(polygon) => { return changePolygonColor(polygon) }}
      onPolygonHover={(polygon) => {
        if (polygon != null)
          setHoveredPolygon(polygon.name)
      }}
      onPolygonClick={(polygon) => {
        if (polygon != null) {
          if (polygon.name === "world") {
            searchedFishPolygon[0].length = 0;
            console.log(searchedFishPolygon[0])
            setSideInfoVisible(false);
            setWidth(window.innerWidth);
          }
          else
            setSideInfoVisible(true);
          setSearchedFishPolygon([[], null])
          setClickedPolygon(polygon.name);
          setCurrentPolygonName(polygon.name);
          handlePolygonClickRequest(polygon);
        }
      }}
    />
  );
}
