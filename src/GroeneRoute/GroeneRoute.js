import "../App.css";
import React from 'react';
import GroeneMap from './GroeneMap';
import Collapsible from 'react-collapsible';
import Afkortingen from "../Afkortingen";

function GroeneRoute() {
  return (
    <div className="contentContainer">
            <GroeneMap />
            <section className="contentSection">
              <h1 className="contentSection_h1">Start- en eindpunt: Station</h1>
              <Collapsible trigger="Groene Route deel 1">
                <p className="contentSection_p">Begin route deel 1: Station , eind route deel 1: H: GBG Kleiweg </p>
                <p className="contentSection_p">H: GBG Station, perron Station verlaten aan noordzijde, oversteken Burg. Jamessingel, D: Hazepad, L: Ronssepad, R: Ronssepad, L: Ronsseweg, R: Ronsseweg, R: Bleulandweg, H: GBG Bleulandweg, Groene Hart Ziekenhuis </p>
              <p className="contentSection_p">D: Bleulandweg, Willem de Zwijgersingel, R: Juliana van Stolbergstraat, R: Willem en Marialaan, R: Graaf Florisweg, H: GBG Belg. Vluchtelingen 1 en H: GBG Belg. Vluchtelingen 2 </p>
              <p className="contentSection_p">D: Graaf Florisweg, H: bij Sint-Jozefpaviljoen: GBG Graaf Florisweg, St. Jozefpaviljoen </p>
              <p className="contentSection_p">D: Graaf Florisweg, R: Albert Plesmanplein,  L: Albert Plesmanplein, L: Spoorstraat, D: onder Spoortunnel door, O:, H: GBG Spoorwegovergang </p>
              <p className="contentSection_p">O:, D: Spoorstraat, H: bij hoek Spoorlaan: GBG Spoorstraat zuidwaarts </p>
              <p className="contentSection_p">D: Spoorstraat, Kleiwegbrug, Kleiweg, H: GBG Kleiweg </p>
              </Collapsible>
              <Collapsible trigger="Groene Route deel 2">
              <p className="contentSection_p">Begin route deel 2: H: GBG Kleiweg, eind route deel 2: H: entree Van Bergen IJzendoornpark: GBG Van Bergen IJzendoornpark</p>
              <p className="contentSection_p">D: Kleiweg, H: hoek Sint Anthoniestraat: GBG St. Anthoniestraat </p>
              <p className="contentSection_p">L: Sint Anthoniestraat, R: Achter de Waag, H: GBG Markt, waag & stadhuis</p>
              <p className="contentSection_p">D: Achter de Waag, H: Waag: GBG Waag </p>
              <p className="contentSection_p">D: Achter de Waag, Markt, H: GBG Markt, Meter </p>
              <p className="contentSection_p">R: Markt noordzijde, L: Markt westzijde, O:, H: GBG Markt, kabelwerkzaamheden </p>
              <p className="contentSection_p">R: Korte Groenendaal, R: Naaierstraat, L: Turfmarkt noordzijde, R: Lange Dwarsstraat, H: hoek Lange Dwarsstraat/Nieuwehaven: GBG Nieuwehaven </p>
              <p className="contentSection_p">L: Nieuwehaven, Remeynsbrug over, R: Hoge Gouwe, Pottersplein, R: Pottersplein, H: Bolwerk: GBG Bolwerk </p>
              <p className="contentSection_p">Oversteken Kattensingel, R: Kattensingel, L: Van Strijenstraat, R: Piersonweg, R: Van Beverninghlaan, R: Van Swietenstraat,  L: Kattensingel, H: bij hoek Crabethstraat: GBG Crabethstraat </p>
              <p className="contentSection_p">L: Crabethstraat, H: GBG Station, stationsgebouw </p>
              <p className="contentSection_p">L: Van Bergen IJzendoornpark, H: entree Van Bergen IJzendoornpark: GBG Van Bergen IJzendoornpark </p>
              <p className="contentSection_p">O:, Van Bergen IJzendoornpark, Station</p>
              </Collapsible>
              <Afkortingen />
            </section>
      </div>
  )
}

export default GroeneRoute;

