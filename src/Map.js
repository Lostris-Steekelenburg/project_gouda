import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

class myMap extends Component{
    state = {};
    render(){
        return(
            <Map style={{ height: '100vh' }} center={[52.0115205, 4.7104633]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/"">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        );
    }
}


export default myMap;