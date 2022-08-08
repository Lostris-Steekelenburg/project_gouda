import "../App.css";
import React from 'react';
import GeleMap from './GeleMap';
import Collapsible from 'react-collapsible';
import Afkortingen from "../Afkortingen";


function GeleRoute() {
  return (
    <div className="contentContainer">
        <GeleMap />
        <section className="contentSection">
              <h1 className="contentSection_h1">Start- en eindpunt: VVV-kantoor de Waag</h1>
              <Collapsible trigger="Gele Route deel 1">
                <p className="contentSection_p">Begin route deel 1: VVV-kantoor ( de Waag) Markt noordzijde, , eind route deel 1: H: GBG Lange Tiendeweg </p>
                <p className="contentSection_p">VVV-kantoor ( de Waag) Markt noordzijde, R: de Waag, H: GBG Waag </p>
                <p className="contentSection_p">D: Achter de Waag, H: GBG Waag, stadhuis & kerk </p>
                <p className="contentSection_p">D: Nieuwe Markt, Agnietenkapel, L: passeren, H: GBG Nieuwe Markt, kaasboerin</p>
                <p className="contentSection_p">D: Agnieten-straat, R: Conventstraat, H: GBG Houtmansbad </p>
                <p className="contentSection_p">R: Lem Dulstraat, bij kruising met Wilhelminastraat/ Nieuwe Markt, H: GBG Nieuwe Markt, paarden </p>
                <p className="contentSection_p">D: Nieuwe Markt langs Agnietenkapel, L: Zeugstraat, H: GBG Zeugstraat </p>
                <p className="contentSection_p">R: Lange Tiendeweg, H: GBG Lange Tiendeweg </p>
              </Collapsible>
              <Collapsible trigger="Gele Route deel 2">
              <p className="contentSection_p">Begin route deel 2: H: GBG Lange Tiendeweg, eind route deel 2: H: Raam: GBG Raam  </p>
              <p className="contentSection_p">D: Lange Tiendeweg, L: Achter de Kerk, Willem Vroesentuin, </p>
              <p className="contentSection_p">R: Achter de Kerk, H: GBG Catharinatuin D: Achter de Kerk, H: GBG St. Jan, zuidzijde </p>
              <p className="contentSection_p">D: Achter de Kerk, H: GBG St. Jan, Achter de Kerk D: Achter de Kerk, </p>
              <p className="contentSection_p">L: Torenstraat, O: en H: GBG St. Jan, Kanonstraat </p>
              <p className="contentSection_p">O:, D: Torenstraat, H: GBG Wijdstraat, de Zon </p>
              <p className="contentSection_p">D: Lage Gouwe, H: bij hoek Lange Groenendaal: GBG Lage Gouwe, apotheek </p>
              <p className="contentSection_p">O:, D: Sint-Joostbrug, L: Hoge Gouwe, H: hoek Aaltje Bakstraat: GBG Lage Gouwe, Aaltje Bakstraat </p>
              <p className="contentSection_p">D: Hoge Gouwe, R: Keizerstraat, R: Kuiperstraat, H: Raam: GBG Raam </p>
              </Collapsible>
              <Collapsible trigger="Gele Route deel 3">
              <p className="contentSection_p">Begin route deel 3: H: Raam: GBG Raam, eind route deel 3: H: GBG Markt, Meter  </p>
              <p className="contentSection_p">L: Raam, Bogen, Veerstal, R: Westhaven, oversteken naar parkeerplaats IJsselkade, H: GBG IJsselkade </p>
              <p className="contentSection_p">O:, oversteken, R: Nieuwe Veerstal, H: GBG IJsselkade, Tolhuis </p>
              <p className="contentSection_p">D: Nieuwe Veerstal, O:, H: GBG IJsselkade, Watersnoodramp ‘53 </p>
              <p className="contentSection_p">D: Nieuwe Veerstal, L: Fluwelensingel, L: Doelenstraat, Walestraat, Lange Noodgodsstraat, Noodgodsbrug over, R: Westhaven, H: GBG Westhaven, hondenkar </p>
              <p className="contentSection_p">D: Westhaven, R: Sint-Jansbrug over, H: Oosthaven: GBG Oosthaven </p>
              <p className="contentSection_p">L: Dubbele Buurt, Wijdstraat, Markt, H: GBG Markt, Stadhuis </p>
              <p className="contentSection_p">D: Markt, westzijde, H: GBG Markt kabelwerkzaamheden </p>
              <p className="contentSection_p">D: Markt westzijde, Markt noordzijde, </p>
              <p className="contentSection_p">O:, H: GBG Markt, Meter </p>
              <p className="contentSection_p">O:, De Waag</p>
              </Collapsible>
              <Afkortingen />
            </section>
      </div>
  )
}

export default GeleRoute;

