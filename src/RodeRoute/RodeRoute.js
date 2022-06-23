import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import RodeMap from './RodeMap';


function RodeRoute() {
  return (
    <div className="contentContainer">
            <RodeMap />
      </div>
  )
}

export default RodeRoute;

