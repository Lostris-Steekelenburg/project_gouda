import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import WrGroen from "./data/Wandelroute_Groen.json"
import L from 'leaflet'
import iconGroen from './img/markerGroen.png'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('./img/marker-blauw-2x.png'),
   iconUrl: require('./img/marker-blauw.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class myMap extends Component{
    state = {};

    style_WrGroen = {
        color: "#6BB536",
        weight: 5,
        opacity: 0.8
    };

    // L.geoJSON(WrGroen,{
    //     style: function(feature){
    //         return{
    //             color: "#6BB536",
    //             weight: 3
    //         }
    //     },
    //     pointToLayer: function(feature, latlng) {
    //         return L.marker(latlng, {icon: iconGroen});
    //     },
    // });

    render(){
        return(
            <Map className="map" center={[52.0115205, 4.7104633]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/"">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                foreach
                <GeoJSON className="WrGroen" style={this.style_WrGroen}data={WrGroen.features} />
            </Map>
        );
    }
}

export default myMap;