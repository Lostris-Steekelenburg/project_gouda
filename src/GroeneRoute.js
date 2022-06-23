import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import GroeneRouteLaden from './GroeneRouteLaden';
import GroeneMap from './GroeneMap';
import Button from './button';


function GroeneRoute() {
  return (
    <div className="contentContainer">
            <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Groene route</h1></header>
            <GroeneMap />
      </div>
  )
}

export default GroeneRoute;

