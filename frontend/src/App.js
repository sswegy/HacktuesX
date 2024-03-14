import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import GlobeMap from './globe';

function App() {
  return (
    <div className="container">
    <div className="searchBar">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input placeholder="test"/>
    </div>
    <GlobeMap/>
  </div>
  );
}

export default App;
