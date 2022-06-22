import React, {Component} from "react";
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

// console.log(WrGroen.features.properties)

let greenIcon = L.icon({
    iconUrl: require('./img/marker-groen.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25,41],
    iconAnchor: [12, 41],
    shadowSize:[50, 60],
    shadowAnchor: [12, 65],
    popupAnchor: [0, -40]
});

const baseUrl = "http://206.189.105.69/route/";

// console.log(fetch(baseUrl + "green").json());

// async function getRouteGroen() {
//     const response = await fetch(baseUrl + "green");
//     const data = await response.json();
//     return data;
// }
//
// console.log(typeof getRouteGroen())
//     const FeatureCollection = JSON.parse(data.geo_data);
//     const features = FeatureCollection.features;
//     for(let i=0; i<features.length; i++){
//         console.log(features[i].geometry.type);
//         if(features[i].geometry.type === "Point"){
//             return(
//                 <Marker location={features[i].geometry.coordinates}>
//                     <Popup>
//                         <h1>{features[i].properties.name}</h1>
//                         <p>{features[i].properties.location}</p>
//                     </Popup>
//                 </Marker>
//             )
//         }else{
//             return("geen Point"
//             )
//         }
//
//     }
    // console.log(FeatureCollection.features);
// }

// const response = fetch(baseUrl + "yellow");
// const data = response.json();
// const FeatureCollection = JSON.parse(data.geo_data);
// const features = FeatureCollection.features;
//
// console.log(features);


// console.log(WrGroen)

// const WrGeel =
//     console.log(getRouteGeel())

// const groen =
//     fetch(baseUrl + "green")
//         .then
//         (
//             response => response.json()
//         ).then(
//             data =>
//         )
    // .then(
    //         FeatureCollection => FeatureCollection.features
    //     ).then(
    //         content => return("test")
    // );

// const data = await response.json();
// const FeatureCollection = JSON.parse(data.geo_data);
// const features = FeatureCollection.features;

// console.log(WrGroen)

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
        };

    render(){
        return(
            <Map className="map" center={[52.0155205, 4.7104633]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/"">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON className="WrGroen" style={this.style_WrGroen} data={WrGroen} pointToLayer={this.pointToLayer.bind(this)}>
                    onEachFeature: function (feature, layer){

                    <Popup>
                        {/*<h1>{feature.properties.name}</h1>*/}
                        {/*<p>{feature.properties.location}</p>*/}
                        <p>test</p>
                        {/*{console.log(WrGroen.features.properties.name)}*/}
                    </Popup>
                    }
                </GeoJSON>
                {/*{getRouteGroen()}*/}
            </Map>
        );
    }
}


export default myMap;