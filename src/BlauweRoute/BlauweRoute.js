import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import BlauweMap from './BlauweMap';


function BlauweRoute() {
  return (
    <div className="contentContainer">
            <BlauweMap />
      </div>
  )
}

export default BlauweRoute;

