import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Map from './Map';
import Button from './button';


function GeleRoute() {
  return (
    <div className="contentContainer">
            <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Gele route</h1></header>
        <Map />
      </div>
  )
}

export default GeleRoute;

