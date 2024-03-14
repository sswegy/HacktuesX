import React, { useRef } from 'react';
import Globe from 'react-globe.gl';
import coordinates from './coordinates';

function GlobeMap() {
    const globeRef = useRef(null);
    const xOffset = 2; // Horizontal offset
    const yOffset = 2;

    const polygons = [
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [23.3219, 42.6977],
                    [-3.7038, 40.4168],
                    [-0.1278, 51.5074],
                    [10.7522, 59.9139],
                    [23.3219, 42.6977]
                ]]
            },
            name: "Europe"
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-10, 10],
                    [-20, 10],
                    [-20, 20],
                    [-10, 20],
                    [-10, 10]
                ]]
            },
            name: "square"
        },
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [-39.71947663358313, 57.0145277150759],
                    [-28.907803980473147, 57.17336363023702],
                    [-21.416843125592266, 54.737403497335094],
                    [-13.819042525190156, 51.04003195178487],
                    [-12.83212641889483, 46.9333226230448],
                    [-11.446125213130784, 41.53153941048754],
                    [-11.166062635255486, 38.665561148726454],
                    [-11.328596315428086, 36.07449828691979],
                    [-10.9836247554679, 32.51860857710541],
                    [-12.163742761657062, 29.61399127673313],
                    [-15.782111608601895, 28.007414435515656],
                    [-17.39746271316085, 23.859979197638793],
                    [-18.315967960139318, 20.53013870784676],
                    [-18.199750985936646, 15.284394283515667],
                    [-17.029488475874587, 10.584556163682151],
                    [-11.761216034587108, 5.046488445567789],
                    [-18.279217033968706, 0.062003780587303936],
                    [-33.60793688467726, -5.113275462286694],
                    [-42.28334743897227, -0.9243374892352989],
                    [-47.82181698322967, 2.0424827339351452],
                    [-51.89443329241212, 7.280516415485522],
                    [-58.133055628888684, 14.627086721614262],
                    [-64.53856056116386, 19.08536058076166],
                    [-72.24634518664234, 23.17340190324228],
                    [-74.95516968002767, 27.04333005803676],
                    [-74.62743271054029, 33.22256579876945],
                    [-70.75061040199847, 37.53233827473289],
                    [-63.050732355673745, 41.074276178857986],
                    [-54.96292802406472, 43.334269982681576],
                    [-49.12024550095316, 50.014926325110366],
                    [-39.71947663358313, 57.0145277150759]

                ]]
            },
            name: "atlantic"
        }
    ];

    const handleClick = (event) => {        
        const { offsetX, offsetY } = event.nativeEvent;
        if (globeRef.current) {
            const globeCoords = globeRef.current.toGlobeCoords(offsetX, offsetY);
            if (globeCoords) {
                const { lat, lng } = globeCoords;
                console.log('Clicked coordinates:', { lat, lng });
            } else {
                console.log('Globe coordinates could not be determined.');
            }
        } else {
            console.log('Globe reference is not yet initialized.');
        }
    };

    return (
        <div onClick={handleClick}>
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                globeTextureUrl={({ detail }) => {
                    detail.context.drawImage(detail.texture.image, xOffset, yOffset);
                    return detail.canvas.toDataURL();
                }}

                width={500}
                height={500}
                backgroundColor="#edede9"

                polygonsData={polygons}
                polygonGeoJsonGeometry={(polygon) => polygon.geometry}
                polygonAltitude={0.01}
                polygonCapColor="blue"
                polygonSideColor="blue"

            />
        </div>
    );
}

export default GlobeMap;