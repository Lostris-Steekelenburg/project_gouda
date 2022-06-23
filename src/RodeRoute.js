import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import RodeMap from './RodeMap';
import Button from './button';


function RodeRoute() {
  return (
    <div className="contentContainer">
            <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Groene route</h1></header>
            <RodeMap />
      </div>
  )
}

export default RodeRoute;

