import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import BlauweMap from './BlauweMap';
import Collapsible from 'react-collapsible';
import Afkortingen from "../Afkortingen";


function BlauweRoute() {
  return (
    <div className="contentContainer">
            <BlauweMap />
            <section className="contentSection">
              <h1 className="contentSection_h1">Start- en eindpunt: Erasmusplein </h1>
              <Collapsible trigger="Blauwe Route deel 1">
                <p className="contentSection_p">Begin route deel 1: Erasmusplein , eind route deel 1: H bij hoek Lijsterbesstraat: GBG Woudstraat  </p>
                <p className="contentSection_p">L: Turfsingel, L: langs de Jonker en de Wachtel, PrinsHendrikstraat oversteken bij zebrapad, H: bij hoek Wachtelstraat: GBG Moordrechts Verlaat</p>
              <p className="contentSection_p">D: Wachtelstraat, H: GBG Wachtelstraat </p>
              <p className="contentSection_p">D: Wachtelstraat, L: steegje/brandgang bij cafetaria Vreugdenhil, O: bij Prins Hendrikstraat, H: GBG Stront Korte Akkeren </p>
              <p className="contentSection_p">O:, R: Prins Hendrikstraat, R: Westerkade, L: Walvisstraat, H: GBG Walvisstraat, ONA </p>
              <p className="contentSection_p">D: Walvisstraat, R: Gerard Leeustraat, L: Emmastraat, H: bij Sacraments-kerk: GBG Sacraments-kerk, </p>
              <p className="contentSection_p">D: Emmastraat, Constantijn Huygensstraat, L: Herenstraat, R: Bosweg, L: Woudstraat, O: en H: bij hoek Lijsterbesstraat: GBG Woudstraat </p>
              </Collapsible>
              <Collapsible trigger="Blauwe Route deel 2">
              <p className="contentSection_p">Begin route deel 2: H bij hoek Lijsterbesstraat: GBG Woudstraat, eind route deel 2: H: GBG Turf-singel, veer  </p>
              <p className="contentSection_p">O:, D: Woudstraat, R: Prins Hendrikstraat, R: Jan Philipsweg, L: Bosweg, oversteken kruising met Vorstman-straat,</p>
              <p className="contentSection_p">L: paadje langs oude begraafplaats parallel aan de Vorstmanstraat, H: GBG Oude Begraafplaats </p>
              <p className="contentSection_p">D: paadje langs oude begraafplaats, Kerkhoflaan, R: Buurtje, L: Mallegatsluis, H: GBG Mallegat-sluis </p>
              <p className="contentSection_p">O:, D: Mallegatsluis, H: bij hoek Buurtje: GBG Turfsingel, werkvolk </p>
              <p className="contentSection_p">R: Buurtje, D: Turfsingel, O:, H: GBG Turfsingel, dames Stearinefabriek </p>
              <p className="contentSection_p">O:, D: Turfsingel, H: GBG: Korte Akkeren, Garenspinnerij </p>
              <p className="contentSection_p">D: Turfsingel, R: Guldenbrug oversteken, O:, H: GBG Turf-singel, veer </p>
              <p className="contentSection_p">O:, Guldenbrug oversteken, Erasmusplein</p>
              </Collapsible>
              <Afkortingen />
            </section>
      </div>
  )
}

export default BlauweRoute;

