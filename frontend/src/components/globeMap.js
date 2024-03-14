import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeMap() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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

  const globeRef = useRef(null);

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

  const polygons = [
    {
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.154474, 11.94015],
            [1.935986, 11.64115],
            [1.447178, 11.547719],
            [1.24347, 11.110511],
            [0.899563, 10.997339],
            [0.023803, 11.018682],
            [-0.438702, 11.098341],
            [-0.761576, 10.93693],
            [-1.203358, 11.009819],
            [-2.940409, 10.96269],
            [-2.963896, 10.395335],
            [-2.827496, 9.642461],
            [-3.511899, 9.900326],
            [-3.980449, 9.862344],
            [-4.330247, 9.610835],
            [-4.779884, 9.821985],
            [-4.954653, 10.152714],
            [-5.404342, 10.370737],
            [-5.470565, 10.95127],
            [-5.197843, 11.375146],
            [-5.220942, 11.713859],
            [-4.427166, 12.542646],
            [-4.280405, 13.228444],
            [-4.006391, 13.472485],
            [-3.522803, 13.337662],
            [-3.103707, 13.541267],
            [-2.967694, 13.79815],
            [-2.191825, 14.246418],
            [-2.001035, 14.559008],
            [-1.066363, 14.973815],
            [-0.515854, 15.116158],
            [-0.266257, 14.924309],
            [0.374892, 14.928908],
            [0.295646, 14.444235],
            [0.429928, 13.988733],
            [0.993046, 13.33575],
            [1.024103, 12.851826],
            [2.177108, 12.625018],
            [2.154474, 11.94015],
          ],
        ],
      },
    },
  ];

  return (
    <div className="globemap-container" onClick={handleClick}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        width={width * 95/100}
        //height={height * 95/100}
        backgroundColor="#1A1E2E"
        polygonsData={polygons}
        polygonAltitude={0.01}
        polygonCapColor="blue"
        polygonSideColor="blue"
      />
    </div>
  );
}
