import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import WrGroen from "./data/Wandelroute_Groen.json"
import L from "leaflet";

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

    const style_WrGreen = {
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
        opacity: 0.8,
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

    const redIcon = L.icon({
        iconUrl: require('./img/marker-rood.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25,41],
        iconAnchor: [12, 41],
        shadowSize:[50, 60],
        shadowAnchor: [12, 65],
        popupAnchor: [0, -40]
    });

    const yellowIcon = L.icon({
        iconUrl: require('./img/marker-geel.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25,41],
        iconAnchor: [12, 41],
        shadowSize:[50, 60],
        shadowAnchor: [12, 65],
        popupAnchor: [0, -40]
    });

    const blueIcon = L.icon({
        iconUrl: require('./img/marker-blauw.png'),
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

    const pointToLayerRed = (feature, latlng) => {
        return L.marker(latlng, {
            icon: redIcon
        });
    };

    const pointToLayerYellow = (feature, latlng) => {
        return L.marker(latlng, {
            icon: yellowIcon
        });
    };

    const pointToLayerBlue = (feature, latlng) => {
        return L.marker(latlng, {
            icon: blueIcon,
        });
    };

    return(
        <>
        {routeRed && <GeoJSON style={style_WrRed} data={routeRed} pointToLayer={pointToLayerRed.bind(this)}>
            {routeRed.features.map((feature) =>
                <Popup key={feature.id}>
                    <h2>Naam marker</h2>
                    <p>Locatie marker</p>
                </Popup>)})
            }
            </GeoJSON>
        }
        {routeGreen && <GeoJSON style={style_WrGreen} data={routeGreen} pointToLayer={pointToLayerGreen.bind(this)}>
            {routeGreen.features.map((feature) =>
                <Popup key={feature.id}>
                    <h2>{routeGreen.features[0].properties.name}</h2>
                    <p>Locatie marker</p>
                </Popup>)}
                }
            </GeoJSON>
        }
        {routeBlue && <GeoJSON style={style_WrBlue} data={routeBlue} pointToLayer={pointToLayerBlue.bind(this)}>
            {routeBlue.features.map((feature) =>
                <Popup key={feature.id}>
                <h2>{feature.properties.name}</h2>
                <p>Locatie marker</p>
                </Popup>)}

            </GeoJSON>
        }
        {routeYellow && <GeoJSON style={style_WrYellow} data={routeYellow} pointToLayer={pointToLayerYellow.bind(this)}>
            {routeYellow.features.map((feature) =>
                <Popup key={feature.id}>
                    <h2>Naam marker</h2>
                    <p>Locatie marker</p>
                </Popup>)}
                }
            </GeoJSON>
        }
        </>
    )
};

export default Data;