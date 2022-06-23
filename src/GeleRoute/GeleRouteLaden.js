import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from "leaflet";




const GeleRouteLaden = () =>{
    var [routeYellow, setRouteYellow] = useState(null)
    const baseUrl = "http://206.189.105.69/route/";

    useEffect(() => {


        function getYellow(){
            fetch(baseUrl + "yellow")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    data = JSON.parse(data.geo_data);
                    setRouteYellow(data);
                })
        }

        getYellow();

    }, [])

 
    const style_WrYellow = {
        color: "#fecf23",
        weight: 5,
        opacity: 0.8
    };

   
    const yellowIcon = L.icon({
        iconUrl: require('../img/marker-geel.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25,41],
        iconAnchor: [12, 41],
        shadowSize:[50, 60],
        shadowAnchor: [12, 65],
        popupAnchor: [0, -40]
    });


    const pointToLayerYellow = (feature, latlng) => {
        return L.marker(latlng, {
            icon: yellowIcon
        });
    };


    return(
        <>
        {routeYellow && <GeoJSON className="routeGeel"style={style_WrYellow} data={routeYellow} pointToLayer={pointToLayerYellow.bind(this)}>
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

export default GeleRouteLaden;