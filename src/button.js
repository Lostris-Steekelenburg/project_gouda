import React, {Component} from "react";
import Map from './Map';

function groeneRoute(){
    console.log('groen');
}

function rodeRoute(){
    console.log('Rood');
}

function blauweRoute(){
    console.log('Blauw');
}

function geleRoute(){
    console.log('Geel');
}

function alleRoutes(){
    console.log('alleRoutes');
}

class Button extends Component{
    render(){
        return(
            <section>
                <button onClick = {alleRoutes}>Alle</button>
                <button className="button__groen" onClick = {groeneRoute}>Groen</button>
                <button className="button__rood" onClick = {rodeRoute}>Rood</button>
                <button className="button__blauw" onClick={blauweRoute}>Blauw</button>
                <button className="button__geel" onClick={geleRoute}>Geel</button>
            </section>
        );
    }
}


export default Button;

