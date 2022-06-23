import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import GeleMap from './GeleMap';
import Button from './button';


function GeleRoute() {
  return (
    <div className="contentContainer">
        <GeleMap />
      </div>
  )
}

export default GeleRoute;

