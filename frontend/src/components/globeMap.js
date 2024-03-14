import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import coordinates from "../data/coordinates.js";

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

  const polygons = [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
              [0.001, 0.001],
              [0, 0.001],
              [0, 0],
              [0.001, 0],        
              [0.001, 0.001]
          ]
      ]
      },
      name: "world",
      color: [255, 255, 255]
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates['north-pacific']]
      },
      name: "north-pacific",
      color: [138, 201, 38]
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates['south-atlantic']]
      },
      name: "south-atlantic",
      color: [255, 202, 58]
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates['south-pacific']]
      },
      name: "south-pacific",
      color: [25, 130, 196]
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates.indian]
      },
      name: "indian",
      color: [106, 76, 147]
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates["sargasso-sea"]]
      },
      name: "sargasso-sea",
      color: [106, 76, 147]
    },
  ];

  const changePolygonColor = (polygon) => {
    if(polygon.name === "world")
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.01 + ")"
    if (hoveredPolygon === polygon.name || clickedPolygon === polygon.name) {
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.6 + ")"
    } else {
      return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.2 + ")"
    }
  }

  const changeAltitude = (polygon) => {
    if(polygon.name === "world") return 0.001
    if( clickedPolygon === polygon.name ){
      return 0.1
    }else{
      return 0.05
    }
  }

  return (
    <div className="globemap-container">
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
            setClickedPolygon(polygon.name)
        }}
      />
    </div>
  );
}
