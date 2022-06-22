import "./App.css";
import React from 'react';
import Map from './Map';
import Data from './Data'


function App() {
  return <div className="contentContainer">
    <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Gouda in Beeld & Gedicht</h1></header>
        <Map />
        <footer className="contentContainer__footer">© 2022</footer>
      </div>
}

export default App;


