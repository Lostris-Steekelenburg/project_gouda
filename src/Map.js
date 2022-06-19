import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import WrGroen from "./data/Wandelroute_Groen.geojson"

class myMap extends Component{
    state = {};
    render(){
        return(
            <Map className="map" center={[52.0115205, 4.7104633]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/"">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={WrGroen.features} />
            </Map>
        );
    }
}


export default myMap;