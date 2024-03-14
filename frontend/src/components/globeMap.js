import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import coordinates from "../data/coordinates.js";

export default function GlobeMap() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [hoveredPolygon, setHoveredPolygon] = useState("");
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
        coordinates: [coordinates['north-atlantic']]
      },
      name: "north-atlantic",
      color: [255, 89, 94]
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
  ];


  const handleClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (globeRef.current) {
      const globeCoords = globeRef.current.toGlobeCoords(offsetX, offsetY);
      if (globeCoords) {
        const { lat, lng } = globeCoords;
        console.log("Clicked coordinates:", { lat, lng });
      } else {
        console.log("Globe coordinates could not be determined.");
      }
    } else {
      console.log("Globe reference is not yet initialized.");
    }
  };

  return (
    <div className="globemap-container" onClick={handleClick}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        width={width * 95 / 100}
        backgroundColor="#1A1E2E"

        polygonsData={polygons}
        polygonGeoJsonGeometry={(polygon) => polygon.geometry}
        polygonAltitude={0.08}
        polygonSideColor={(polygon) => { return "rgba(0, 100, 0, 0.15)"; }}
        polygonStrokeColor={(polygon) => { return '#000000'; }}
        polygonCapColor={(polygon) => {
          if (hoveredPolygon === polygon.name) {
            console.log(polygon.name)
            console.log(hoveredPolygon)
            return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.6 + ")"
          } else {
            console.log("aa")
            return "rgba(" + polygon.color[0] + ", " + polygon.color[1] + ", " + polygon.color[2] + ", " + 0.2 + ")"
          }
        }}
        onPolygonHover={(polygon) => { polygon != null ? setHoveredPolygon(polygon.name) : console.log("nishto") }
        }
      />
    </div>
  );
}
