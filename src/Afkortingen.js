import "./App.css";
import React from 'react';
import Collapsible from 'react-collapsible';

function Afkortingen() {
  return (
    <Collapsible trigger="Uitleg afkortingen">
        <p className="contentSection_p">D = doorlopen</p>
        <p className="contentSection_p">H = halt houden voor beeld-gedicht-combinatie (GBG) </p>
        <p className="contentSection_p">L = linksaf </p>
        <p className="contentSection_p">O = omdraaien </p>
        <p className="contentSection_p">R = rechtsaf</p>
    </Collapsible>

  )
}

export default Afkortingen;

