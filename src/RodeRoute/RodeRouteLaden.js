import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from "leaflet";




const RodeRouteLaden = () =>{
    var [routeRed, setRouteRed] = useState(null)

    const baseUrl = "http://206.189.105.69/route/";

    useEffect(() => {


        function getRed(){
            fetch(baseUrl + "red")
            .then(res => {
                return res.json();
            })
            .then(data => {
                data = JSON.parse(data.geo_data);
                setRouteRed(data);
            })
        }




        getRed();


    }, [])



    const style_WrRed = {
        color: "#de2025",
        weight: 5,
        opacity: 0.8
    };


    const redIcon = L.icon({
        iconUrl: require('../img/marker-rood.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25,41],
        iconAnchor: [12, 41],
        shadowSize:[50, 60],
        shadowAnchor: [12, 65],
        popupAnchor: [0, -40]
    });


    const pointToLayerRed = (feature, latlng) => {
        return L.marker(latlng, {
            icon: redIcon
        });
    };


    return(
        <>
        {routeRed && <GeoJSON className="routeRood"style={style_WrRed} data={routeRed} pointToLayer={pointToLayerRed.bind(this)}>
                onEachFeature: function (feature, layer){
                    <Popup>
                        <p>test</p>
                    </Popup>
                }
            </GeoJSON>
        }</>
    )
};

export default RodeRouteLaden;