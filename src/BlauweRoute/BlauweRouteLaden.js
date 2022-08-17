import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from "leaflet";




const BlauweRouteLaden = () =>{
    // var [routeBlue, setRouteBlue] = useState(null)
    // const baseUrl = "http://206.189.105.69/route/";
    //
    // useEffect(() => {
    //
    //     function getBlue(){
    //         fetch(baseUrl + "blue")
    //             .then(res => {
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 data = JSON.parse(data.geo_data);
    //                 setRouteBlue(data);
    //             })
    //     }
    //     getBlue();
    //
    // }, [])

    const routeBlue = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70434145,52.00870348]},"id":"f7514430-0cc8-44f0-b7a0-d673cd782b4f","properties":{"name":"Start/Einde"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71026717,52.00644294]},"id":"0b7d88c5-47f7-484e-98e8-084226025a0e","properties":{"name":"Blauw 9","location":"Schielands Hoge Zeedijk bij Mallegatssluis"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.69790282,52.00779625],[4.69901458,52.00738878],[4.69949264,52.00721545],[4.70001639,52.00703545],[4.7003222,52.00692242],[4.70083247,52.00669038]]},"id":"700a9a67-5fbb-4d42-839b-cdebd7dfedee","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70082967,52.00668603],[4.70067947,52.0065589],[4.7004783,52.00640865],[4.70008548,52.00613245],[4.70000757,52.00585388],[4.7004555,52.00580765],[4.70066866,52.00577915],[4.70138615,52.00635704],[4.70148405,52.00623651],[4.70155647,52.00617542],[4.70180189,52.00607305],[4.70187163,52.00612258],[4.70243757,52.00642721],[4.70257168,52.00643877],[4.70310338,52.00672938],[4.70317714,52.00681854],[4.703613,52.00705464],[4.703786,52.00705712],[4.70384903,52.00703318],[4.70431171,52.00726268],[4.70480792,52.00755079]]},"id":"6b2aea99-8cc6-4050-9051-28d5f13a5716","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71095958,52.00651603],[4.71064442,52.00637898],[4.71047678,52.00636825],[4.70978176,52.00660971],[4.70779458,52.0071226],[4.70712331,52.00738376],[4.70667555,52.00755233],[4.70643568,52.00764215],[4.70598346,52.00783575],[4.70480865,52.00843508]]},"id":"694c76b0-593a-478f-ad73-f3fae4c8658b","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70526865,52.00865631],[4.70480865,52.00843508],[4.70434145,52.00870348]]},"id":"587c53e5-92e6-42d4-b072-e2e37e681f0a","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70194038,52.01031989]},"id":"ceadffa3-7f19-427d-b1bf-ae7d6ab9631d","properties":{"name":"Blauw 3","location":"Steegje Pr Hendrikstr/Wachtelstr"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70168935,52.01084377]},"id":"614d76ab-dca5-4f8b-8a3d-aedb584cdbc2","properties":{"name":"Blauw 2","location":"Wachtelstraat 27"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7052429,52.00821355]},"id":"989285a5-a614-4fc1-bb4b-36f0ca6cb81c","properties":{"name":"Blauw 12","location":"Turfsingel; Garenspinnerij"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70526865,52.00865631]},"id":"94f88fe1-7087-4318-975a-b18b6d8f0dd5","properties":{"name":"Blauw 13","location":"hoek Vest/ Vlamingstraat"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7062553,52.00629263]},"id":"84490196-9eec-4a30-8c43-44d58a69469d","properties":{"name":"Blauw 8","location":"Vorstmanstr/pr Hendrikstr"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70378596,52.00533558]},"id":"4803ed1b-7190-45b6-b021-11de02746ac5","properties":{"name":"Blauw 7"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70237922,52.01101229]},"id":"3dfa415e-d8cf-49d5-992e-73adfe594388","properties":{"name":"Blauw 1","location":"Pr Hendrikstr 2a"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.7021185,52.01091476],[4.70210643,52.0109032],[4.70208899,52.01094282],[4.70198439,52.01101629],[4.70194415,52.0110361],[4.70181809,52.01095025]]},"id":"e434c699-0804-4f0f-b381-956fe0f374df","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71095958,52.00651603]},"id":"c09aa62c-8ea3-4075-bf3e-c6142d3c6035","properties":{"name":"Blauw 10"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70047953,52.00580444]},"id":"aa4a8bc5-3457-4138-8ad3-c2558cf2cdd9","properties":{"name":"Blauw 5","location":"Jacob v Lennepkade 7"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7052429,52.00821355]},"id":"33d64812-c4a2-4c21-8cbe-551856bb936b","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70480865,52.00843508],[4.70526865,52.00865631]]},"id":"3a2ea9a1-64cf-4585-9977-6b29f5bfc6e7","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70583752,52.0079102]},"id":"ccfafdde-b4c9-46cb-91ea-d725d94ce141","properties":{"name":"Blauw 11"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70431171,52.00726268]},"id":"840a5126-fab2-4cef-a6a5-bb07b0fd3889","properties":{"name":"Blauw 6","location":"Lijsterbesstr 28"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.69822784,52.00767713]},"id":"f95e7b51-f10b-4956-b8c2-e7a6ef9c511e","properties":{"name":"Blauw 4","location":"Walvisstr 26"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70434145,52.00870348],[4.70358373,52.00914925],[4.7031586,52.00941836],[4.70293598,52.00974113],[4.70283137,52.00996896],[4.70278309,52.0102166],[4.70276968,52.01041307],[4.70278175,52.01050882],[4.70279248,52.01061366],[4.70279382,52.01071354],[4.70278711,52.01080186],[4.70276968,52.01086708],[4.70273213,52.01094632],[4.70269324,52.01099255],[4.7026463,52.01102804]]},"id":"00b68944-7e34-498a-8017-e51e49ab1500","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.7026463,52.01102804],[4.7021252,52.0109973],[4.70213057,52.01095768],[4.7021185,52.01091476]]},"id":"5ac70f3a-0a04-4e5e-b26c-77fa7d53d3c8","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70181809,52.01095025],[4.70168935,52.01084377],[4.70154585,52.01070839],[4.70144096,52.01061367]]},"id":"61032400-1e9a-4067-9041-cdbf3da74d5f","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70443679,52.00531207],[4.70779458,52.0071226],[4.70861528,52.00691488],[4.70978176,52.00660971],[4.71031918,52.00642507],[4.71047678,52.00636825],[4.71064442,52.00637898],[4.71095958,52.00651603]]},"id":"6074daf4-44df-42d0-9f70-7ae97d6e90e8","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70144096,52.01061367],[4.70161263,52.01050719],[4.70165286,52.01050388],[4.70202435,52.01026615],[4.70200825,52.01013242],[4.70200596,52.01000284],[4.70058238,52.00924435],[4.70032363,52.00909779],[4.6999236,52.00887403],[4.69942039,52.00860825],[4.69852668,52.00813434],[4.69797902,52.00785586],[4.69790282,52.00779625]]},"id":"968c331d-6f5d-447c-ae8c-a3ce01c01c46","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.70480792,52.00755079],[4.70494632,52.00748471],[4.70535267,52.00724614],[4.70553238,52.00714872],[4.70563162,52.00710579],[4.7057778,52.00706122],[4.70534969,52.00683149],[4.70504258,52.00666885],[4.7047596,52.00651283],[4.7044659,52.00636175],[4.70410783,52.00618178],[4.70373634,52.0059919],[4.70346544,52.00585569],[4.70337826,52.00581193],[4.70304299,52.00561627],[4.70378596,52.00533558],[4.7038824,52.00541519],[4.70413211,52.00546718],[4.70420189,52.0053971],[4.70443679,52.00531207]]},"id":"9aefde76-d289-4676-9fcb-c01af9a4f004","properties":{"name":""}}]}

    const style_WrBlue = {
        color: "#1ca7e2",
        weight: 5,
        opacity: 0.8
    };


    const blueIcon = L.icon({
        iconUrl: require('../img/marker-blauw.png'),
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
        {routeBlue && <GeoJSON className="routeBlauw" style={style_WrBlue} data={routeBlue} pointToLayer={pointToLayerBlue.bind(this)}>
            {routeBlue.features.map((feature) =>
                <Popup key={feature.id}>
                    <h2>{feature.properties.name}</h2>
                    <p>Locatie marker</p>
                </Popup>)}
            </GeoJSON>
        }
        </>
    )
};

export default BlauweRouteLaden;