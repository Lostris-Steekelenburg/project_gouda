import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import RodeMap from './RodeMap';
import Collapsible from 'react-collapsible';
import Afkortingen from "../Afkortingen";

function RodeRoute() {
  return (
    <div className="contentContainer">
            <RodeMap />
            <section className="contentSection">
              <h1 className="contentSection_h1">Start- en eindpunt: Erasmusplein </h1>
              <Collapsible trigger="Rode Route deel 1">
                <p className="contentSection_p">Begin route deel 1: startpunt, eind route deel 1: <b>H</b>: Markt, Stadhuis </p>
                <p className="contentSection_p">D: Guldenbrug oversteken, L: Vest, doorlopen tot brug Pottersplein, H: Bolwerk: GBG Bolwerk </p>
                <p className="contentSection_p">O:, L: Pottersplein, R: Hoge Gouwe, H: GBG Lage Gouwe, Amsterdams Verlaat </p>
                <p className="contentSection_p">D: Hoge Gouwe, L: Crabethbrug oversteken, R: Lage Gouwe, H: hoek Lange Groenendaal: GBG Lage Gouwe, apotheek </p>
                <p className="contentSection_p">R: Sint-Joostbrug, O:, H: GBG Lange Groenendaal </p>
                <p className="contentSection_p">D: Lange Groenendaal, Korte Groenendaal, Markt, H: Markt, kabelwerkzaamheden </p>
                <p className="contentSection_p">R: Markt, O:, H: Markt, Stadhuis </p>
              </Collapsible>
              <Collapsible trigger="Rode Route deel 2">
              <p className="contentSection_p">Begin route deel 2: H: Markt, Stadhuis, eind route deel 2: H: GBG Turfsingel, veer </p>
              <p className="contentSection_p">O:, D: Kerksteeg, R: Achter de Kerk, R: Torenstraat, O:, H: GBG St. Jan Kanonstraat </p>
              <p className="contentSection_p">O:, D: Torenstraat, H: GBG Wijdstraat, de Zon </p>
              <p className="contentSection_p">L: Westhaven, R: Hoge Gouwe, H: GBG Lage Gouwe, schip </p>
              <p className="contentSection_p">D: Hoge Gouwe, L: Keizerstraat, L: Kuiperstraat, R: Peperstraat, R: Veerstal, H: GBG IJsselkade westwaarts </p>
              <p className="contentSection_p">D: naar Mallegatsluis, H: GBG Mallegatsluis </p>
              <p className="contentSection_p">D: naar Schipperswachtlokaal, O: en terug via Mallegatsluis, L: Bogen, L: Vest, O:, H: GBG Vest, Asschuur </p>
              <p className="contentSection_p">O:, D: Vest, H: GBG Turfsingel, veer </p>
              <p className="contentSection_p">L: Guldenbrug over, Erasmusplein</p>
              </Collapsible>
              <Afkortingen />
            </section>
      </div>
  )
}

export default RodeRoute;

