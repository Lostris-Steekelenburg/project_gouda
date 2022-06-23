import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Map from './Map';
import Button from './button';


function Home() {
  return (
    <div className="contentContainer">
        <Map />
      </div>
  )
}

export default Home;

