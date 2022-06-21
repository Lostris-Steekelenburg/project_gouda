import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import WrGroen from "./data/Wandelroute_Groen.json"
import L, { icon } from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

var greenIcon = L.icon({
    iconUrl: require('./img/marker-groen.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25,41],
    iconAnchor: [10, 41],
    shadowSize:[50, 60],
    shadowAnchor: [10, 65],
});

class myMap extends Component{
    state = {};

    style_WrGroen = {
        color: "#599130",
        weight: 5,
        opacity: 0.8
    };

    pointToLayer = (feature, latlng) => {
        return L.marker(latlng, {
            icon: greenIcon
        });
        }


    render(){
        return(
            <Map className="map" center={[52.0155205, 4.7104633]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/"">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON className="WrGroen" style={this.style_WrGroen}data={WrGroen.features} pointToLayer={this.pointToLayer.bind(this)}>
                    onEachFeature: function (feature, layer){
                        <Popup>
                            <p>Informatie over dit punt</p>
                        </Popup>
                    }
                </GeoJSON>
            </Map>
        );
    }
}


export default myMap;