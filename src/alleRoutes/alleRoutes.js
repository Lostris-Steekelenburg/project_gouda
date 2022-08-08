import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Map from '../Map';


function alleRoutes() {
  return (
    <div className="contentContainer">
        <Map />
        <section className="contentSection">
              <h1 className="contentSection_h1">Gouda in beeld & gedicht</h1>
              <p className="contentSection_p">Op deze site zijn 4 verschillende wandelroutes te zien in Gouda. Doormiddel van het menu is het mogelijk om elke route individueel te bekijken</p>
              <p className="contentSection_p">Bij elke route staat aan de rechterkant een vlak met daarin alle stopplekken voor die specifieke wandelroute waarin gebouwen of plaatsen te zien zijn die te maken hebben met Gouda in beeld en gedicht. Bij elke halt plek staat de afkorting GBG deze staat voor Gouda in beeld en gedicht. Achter deze afkorting wordt aangegeven wat de locatie is waar naar gekeken moet worden.</p>
            </section>
      </div>
  )
}

export default alleRoutes;

