import React, {Component} from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L, { icon } from 'leaflet'
import Data from "./Data"
import GroeneRouteLaden from './GroeneRouteLaden';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25,41],
    iconAnchor: [12, 41],
    shadowSize:[50, 60],
    shadowAnchor: [12, 65],
    popupAnchor: [0, -40]
});

class GroeneMap extends Component{
    state = {};

    render(){
        return(
            <Map className="map" center={[52.0155205, 4.7104633]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/"">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GroeneRouteLaden />
            </Map>
        );
    }
}

export default GroeneMap;