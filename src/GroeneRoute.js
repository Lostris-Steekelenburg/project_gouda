import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import GroeneRouteLaden from './GroeneRouteLaden';
import GroeneMap from './GroeneMap';
import Button from './button';


function GroeneRoute() {
  return (
    <div className="contentContainer">
            <GroeneMap />
      </div>
  )
}

export default GroeneRoute;

