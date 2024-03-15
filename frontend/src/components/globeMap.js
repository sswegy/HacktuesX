import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import polygons from "./polygons.js";

let fishArea = [{
  "scientificName": "Antennatus sanguineus ",
  "decimalLatitude": "24.333333",
  "decimalLongitude": "-109.95",
  "locality": "Punta norte de Isla Cerralvo, B.C.S.",
  "depth": "3.0",
  "depthAccuracy": "unspecified",
  "area": "antarctic-north-coast",
  "image": "kuri_mi",
  "description": "qj go"
},
{
  "scientificName": "Antennatus sanguineus ",
  "decimalLatitude": "24.333333",
  "decimalLongitude": "-109.95",
  "locality": "Punta norte de Isla Cerralvo, B.C.S.",
  "depth": "3.0",
  "depthAccuracy": "unspecified",
  "area": "south-america-west-coast",
  "image": "kuri_mi",
  "description": "qj go"
}]


export default function GlobeMap() {
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

  const changePolygonColor = (polygon) => {
    if (polygon.name === "world") {
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.01 + ")"
    }

    for (const fish of fishArea) {
      console.log(fish)
      if (fish.area === polygon.name) {
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
    for (const fish of fishArea) {
      if (fish.area === polygon.name) {
        return 0.15
      }
    }
    if (clickedPolygon === polygon.name) {
      return 0.1
    } else {
      return 0.04
    }
  }

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      width={width * 95 / 100}
      backgroundColor="#1A1E2E"

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
          console.log(polygon)
          if (polygon != null)
            if(polygon.name === "world"){
              fishArea.length = 0;
              console.log(fishArea)
            }
            setClickedPolygon(polygon.name)
            setSideInfoVisible(true);
        }}
      />
  );
}
