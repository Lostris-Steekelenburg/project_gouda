import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import GroeneMap from './GroeneMap';


function GroeneRoute() {
  return (
    <div className="contentContainer">
            <GroeneMap />
      </div>
  )
}

export default GroeneRoute;

