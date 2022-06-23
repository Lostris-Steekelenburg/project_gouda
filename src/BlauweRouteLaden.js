import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import WrGroen from "./data/Wandelroute_Groen.json"
import L from "leaflet";




const BlauweRouteLaden = () =>{
    var [routeBlue, setRouteBlue] = useState(null)
    const baseUrl = "http://206.189.105.69/route/";

    useEffect(() => {


        function getBlue(){
            fetch(baseUrl + "blue")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    data = JSON.parse(data.geo_data);
                    setRouteBlue(data);
                })
        }



        getBlue();

    }, [])



    const style_WrBlue = {
        color: "#1ca7e2",
        weight: 5,
        opacity: 0.8
    };


    const blueIcon = L.icon({
        iconUrl: require('./img/marker-blauw.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25,41],
        iconAnchor: [12, 41],
        shadowSize:[50, 60],
        shadowAnchor: [12, 65],
        popupAnchor: [0, -40]
    });


    const pointToLayerBlue = (feature, latlng) => {
        return L.marker(latlng, {
            icon: blueIcon
        });
    };

    return(
        <>
        {routeBlue && <GeoJSON className="routeBlauw"style={style_WrBlue} data={routeBlue} pointToLayer={pointToLayerBlue.bind(this)}>
                onEachFeature: function (feature, layer){
                    <Popup>
                        {/*<h1>{routes.name}</h1>*/}
                        {/*<p>{routes.location}</p>*/}
                        <p>test</p>
                    </Popup>
                }
            </GeoJSON>
        }
        </>
    )
};

export default BlauweRouteLaden;