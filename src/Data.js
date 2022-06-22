import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import WrGroen from "./data/Wandelroute_Groen.json"




const Data = () =>{
    var [routeRed, setRouteRed] = useState(null)
    var [routeGreen, setRouteGreen] = useState(null)
    var [routeBlue, setRouteBlue] = useState(null)
    var [routeYellow, setRouteYellow] = useState(null)
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

        getGreen();
        getRed();
        getBlue();
        getYellow();

    }, [])

    const style_WrGroen = {
        color: "#599130",
        weight: 5,
        opacity: 0.8
    };

    const style_WrRed = {
        color: "#de2025",
        weight: 5,
        opacity: 0.8
    };

    const style_WrBlue = {
        color: "#1ca7e2",
        weight: 5,
        opacity: 0.8
    };

    const style_WrYellow = {
        color: "#fecf23",
        weight: 5,
        opacity: 0.8
    };


    return(
        <>
        {routeRed && <GeoJSON style={style_WrRed} data={routeRed}>
                onEachFeature: function (feature, layer){
                    <Popup>
                        <p>test</p>
                    </Popup>
                }
            </GeoJSON>
        }
        {routeGreen && <GeoJSON style={style_WrGroen} data={routeGreen} >
                onEachFeature: function (features, feature, layer){
                    <Popup>
                        {/*<h1>{routeGreen.features.feature}</h1>*/}
                        {/*<p>{routes.location}</p>*/}
                        <p>test</p>
                    </Popup>
                }
            </GeoJSON>
        }
        {routeBlue && <GeoJSON style={style_WrBlue} data={routeBlue}>
                onEachFeature: function (feature, layer){
                    <Popup>
                        {/*<h1>{routes.name}</h1>*/}
                        {/*<p>{routes.location}</p>*/}
                        <p>test</p>
                    </Popup>
                }
            </GeoJSON>
        }
        {routeYellow && <GeoJSON style={style_WrYellow} data={routeYellow}>
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
}

export default Data;