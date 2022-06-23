import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import WrGroen from "./data/Wandelroute_Groen.json"
import L from "leaflet";




const GroeneRouteLaden = () =>{
    var [routeGreen, setRouteGreen] = useState(null)
    const baseUrl = "http://206.189.105.69/route/";

    useEffect(() => {
        function getGreen() {
            fetch(baseUrl + "green")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    data = JSON.parse(data.geo_data);
                    setRouteGreen(data);
                })
        }

    

        getGreen();


    }, [])

    const style_WrGreen = {
        color: "#599130",
        weight: 5,
        opacity: 0.8
    };

    const greenIcon = L.icon({
        iconUrl: require('./img/marker-groen.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25,41],
        iconAnchor: [12, 41],
        shadowSize:[50, 60],
        shadowAnchor: [12, 65],
        popupAnchor: [0, -40]
    });

    
    const pointToLayerGreen = (feature, latlng) => {
        return L.marker(latlng, {
            icon: greenIcon
        });
    };

    return(
        <>
        {routeGreen && <GeoJSON className="routeGroen"style={style_WrGreen} data={routeGreen} pointToLayer={pointToLayerGreen.bind(this)}>
                onEachFeature: function (features, feature, layer){
                    <Popup>
                        {/*<h1>{routeGreen.features.feature}</h1>*/}
                        {/*<p>{routes.location}</p>*/}
                        <p>test</p>
                    </Popup>
                }
            </GeoJSON>
        }

        </>
    )
};

export default GroeneRouteLaden;