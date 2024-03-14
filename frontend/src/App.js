import './App.css';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Globe from 'react-globe.gl';

function App() {
  const globeRef = useRef(null);

  const handleClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    
    // Check if globeRef.current is not null before accessing its properties/methods
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
    <div className="container">
      <div className="searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder="niggers"/>
      </div>
      <div onClick={handleClick}>
        <Globe
            ref={globeRef}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            width = {500}
            height={500}
            backgroundColor="#edede9"
          />
      </div>
    </div>
  );
}

export default App;
