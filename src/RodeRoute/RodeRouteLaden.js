import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from "leaflet";




const RodeRouteLaden = () =>{
    // var [routeRed, setRouteRed] = useState(null)
    // const baseUrl = "http://206.189.105.69/route/";
    //
    // useEffect(() => {
    //     function getRed(){
    //         fetch(baseUrl + "red")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             data = JSON.parse(data.geo_data);
    //             setRouteRed(data);
    //         })
    //     }
    //     getRed();
    // }, [])

    const routeRed = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70433845,52.00870299]},"id":"6ecbf46e-332f-421b-a8d9-b2f595e26944","properties":{"name":"Start/einde"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71060483,52.00752283],[4.71045214,52.007468],[4.71029308,52.00740012],[4.71000466,52.00734137],[4.7097629,52.00729699],[4.70954871,52.00727088],[4.70923272,52.00729568],[4.70892946,52.00733223],[4.70868769,52.00736617],[4.7085859,52.00739228],[4.7085244,52.00744058],[4.70844381,52.00747583],[4.70823112,52.00751912],[4.70800983,52.00756287],[4.70791998,52.0075703],[4.70767992,52.00757691],[4.70759945,52.00759094],[4.70754447,52.00762726],[4.70750424,52.00766606],[4.70710861,52.0078774],[4.70702144,52.00794261],[4.70694097,52.00799627],[4.70686453,52.00803425],[4.70655339,52.00814899],[4.70650377,52.00816055],[4.70632809,52.00813661],[4.70627847,52.00814239],[4.70526247,52.00865923],[4.7048065,52.00843387],[4.70433845,52.00870299]]},"id":"a2da6dd3-8baa-4d92-8817-ae13ee89de52","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71025689,52.01050314]},"id":"4af8522a-85ee-4c5b-aa66-3ad6b440e729","properties":{"name":"Rood 8","location":"Wijdstraat 14"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.7100935,52.01117162],[4.7101121,52.01102844],[4.71028673,52.01111102],[4.71059554,52.01088687],[4.71054017,52.01084754],[4.71051461,52.01082919],[4.71048905,52.01078331],[4.71047414,52.01074005],[4.71046878,52.01072272],[4.71049292,52.01066411],[4.71055193,52.01058734],[4.71035747,52.01053286],[4.71029175,52.01049571],[4.71025689,52.01050314],[4.71020458,52.01050314],[4.71015362,52.01049076],[4.7101268,52.01047343],[4.710104,52.01045361],[4.71008254,52.01041812],[4.71007315,52.01038262],[4.71007852,52.01034548],[4.71012814,52.01026788],[4.71016435,52.01019689]]},"id":"122485ac-f58a-4e73-a819-96a21900d1c9","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7100935,52.01117162]},"id":"7a7f3fa3-2c52-411d-9756-7c85e2e2ae3f","properties":{"name":"Rood 5"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70688984,52.01019428]},"id":"77c74996-4264-4817-82c6-193d25a3d04b","properties":{"name":"Rood 3","location":"midden op brug"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71016435,52.01019689],[4.71009766,52.01018836],[4.71001585,52.01016689],[4.70965644,52.0099597],[4.70959206,52.00991347],[4.70956927,52.0098821],[4.70953172,52.00985239],[4.70925277,52.00966748],[4.70895772,52.00952384],[4.70872839,52.00944212],[4.70859831,52.00940497],[4.7084937,52.00937938],[4.708373,52.00936287],[4.70828583,52.00935874],[4.70820134,52.00935214]]},"id":"3308be0c-9c63-45cb-a609-471353966fe3","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70528696,52.00864678]},"id":"406faed3-c91d-482b-9bba-0eea2f278478","properties":{"name":"Rood 13","location":"hoek Vest/ Vlamingstraat"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70433845,52.00870299],[4.7048065,52.00843387],[4.70526247,52.00865923],[4.70417695,52.00921425],[4.70397578,52.00934303],[4.70373572,52.00952959],[4.70344873,52.00975825],[4.70338838,52.00984823],[4.70336022,52.00991675],[4.70332803,52.01006863],[4.70333205,52.01041368],[4.70334144,52.01094694],[4.70334546,52.01109304],[4.70337765,52.01114257],[4.70350908,52.01121521]]},"id":"dd3f594e-e671-49d7-b79a-bbce5f33e3fe","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70618174,52.01074322]},"id":"0723fe92-22d6-4f29-b1bd-d42fcf46a06e","properties":{"name":"Rood 2","location":"Lage Gouwe 162"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71014781,52.00804822],[4.71058459,52.0082608],[4.710944,52.00843911],[4.71106202,52.00849194],[4.71124173,52.00855468],[4.71137048,52.00839784],[4.71152604,52.00821457],[4.7116226,52.00810891],[4.71180231,52.0079405],[4.71201957,52.00771926],[4.71221537,52.00751783],[4.71238167,52.00734942],[4.71256674,52.00709351],[4.7126177,52.00701591],[4.71215257,52.00697158],[4.71207737,52.00696629],[4.71202365,52.00697026],[4.7114677,52.00688761],[4.71137253,52.00675392],[4.71129322,52.00669139],[4.71136829,52.00675392],[4.7114677,52.00688867],[4.71202193,52.00697238],[4.71136829,52.00718341],[4.71095687,52.00734007],[4.71060483,52.00752283]]},"id":"e98c7935-b8c4-4fb8-93e3-9488d5ff68a3","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7126177,52.00701591]},"id":"24153b0b-4806-49a3-a9df-1a9c556df0f6","properties":{"name":"Rood 10"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70820134,52.00935214],[4.70829398,52.00920848],[4.70837177,52.00911602],[4.70851391,52.00898834],[4.70859171,52.00893772],[4.70868424,52.00889314],[4.70883353,52.00882668],[4.70901324,52.0087433],[4.70919027,52.00867231],[4.70944642,52.00854601],[4.70969854,52.00840237],[4.70990507,52.00824635],[4.71014781,52.00804822]]},"id":"60cb7075-8973-4c18-be28-b1da77020d71","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71001585,52.01016689]},"id":"cca53ca9-b4df-4686-b6ce-4d3384f4a9f5","properties":{"name":"Rood 9","location":"Hoge Gouwe 7"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71129262,52.00669241]},"id":"52bd826b-d9da-478b-af7b-54b9ef514ed7","properties":{"name":"Rood 11","location":"Schielands Hoge Zeedijk bij Mallegatssluis"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70238774,52.01137519]},"id":"0c1a1423-e000-4816-82d8-fcec2332e081","properties":{"name":"Rood 1","location":"Rabatbrug; punt  Korte Akkeren"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71055193,52.01058734]},"id":"d8f44ff9-bbcf-4d7a-93c9-ccbe6dabe476","properties":{"name":"Rood 7","location":"Torenstr/hoek Achter de Kerk"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70642142,52.00814933]},"id":"2477d833-7e45-4826-ae04-26e4bff4c708","properties":{"name":"Rood 12","location":"Vest 59"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70688064,52.01011055]},"id":"3a5279a0-04b6-4d6f-abfa-ebff69970224","properties":{"name":"Rood 4","location":"Op einde brug pal tegenover Lage Gouwe 136"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70350908,52.01121521],[4.70320776,52.01140971],[4.70275133,52.01165613],[4.70238774,52.01137519],[4.70275133,52.01165613],[4.7032155,52.01140614],[4.70350908,52.01121521],[4.70363896,52.01126278],[4.70422237,52.01155728],[4.70465993,52.01132519],[4.70512098,52.01107406],[4.70528882,52.01097974],[4.70553556,52.01081944],[4.70580506,52.01097347],[4.7058639,52.01096032],[4.70592693,52.01092318],[4.70600605,52.01086622],[4.70618174,52.01074322],[4.70634886,52.01061703],[4.70660687,52.01041386],[4.7068134,52.01025289],[4.70688984,52.01019428],[4.70694885,52.01014558],[4.70688064,52.01011055],[4.70701591,52.01017943]]},"id":"ad6828b6-18ff-4ff5-832c-29cbc1838a10","properties":{"name":"Rood 3"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71024122,52.0110895]},"id":"ac9a3267-84c5-4e71-b29d-34e7d1f56238","properties":{"name":"Rood 6"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70701591,52.01017943],[4.70759068,52.01047963],[4.70830415,52.01088246],[4.70901493,52.01123576],[4.7100935,52.01117162]]},"id":"851428fe-9ff9-4393-a227-f1f151ef9291","properties":{"name":""}}]}

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
        {routeRed && <GeoJSON className="routeRood" style={style_WrRed} data={routeRed} pointToLayer={pointToLayerRed.bind(this)}>
            {routeRed.features.map((feature) =>
                <Popup key={feature.id}>
                    <h2>Naam marker</h2>
                    <p>Locatie marker</p>
                </Popup>)})
            }
            </GeoJSON>
        }</>
    )
};

export default RodeRouteLaden;