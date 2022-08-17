import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import L from "leaflet";




const GeleRouteLaden = () =>{
    // var [routeYellow, setRouteYellow] = useState(null)
    // const baseUrl = "http://206.189.105.69/route/";
    //
    // useEffect(() => {
    //     function getYellow(){
    //         fetch(baseUrl + "yellow")
    //             .then(res => {
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 data = JSON.parse(data.geo_data);
    //                 setRouteYellow(data);
    //             })
    //     }
    //     getYellow();
    // }, [])

    const routeYellow = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71119562,52.01327995],[4.71099811,52.01348881],[4.71083986,52.01449333],[4.71086266,52.0145767],[4.71092435,52.01456762],[4.71115636,52.01459568],[4.71127974,52.01459486],[4.71144201,52.01456762],[4.712577,52.01396793],[4.7129309,52.01374842],[4.71256076,52.01357178],[4.71207126,52.01333736],[4.71188482,52.01325096],[4.71089387,52.01285073],[4.71122639,52.01274882],[4.71162603,52.0126052],[4.71173361,52.01254044],[4.71185834,52.01243396],[4.71231431,52.01200803],[4.71259058,52.01175049],[4.71278504,52.01152515],[4.71280247,52.01144425],[4.7121423,52.01120048],[4.71208731,52.01114518],[4.71181775,52.01101971],[4.71195677,52.01094918],[4.71245923,52.01094083],[4.71258716,52.01093531],[4.71268884,52.01092176],[4.71279063,52.01089043],[4.71281782,52.01087422],[4.71283124,52.01081231],[4.71282855,52.01074545],[4.712791,52.01063649],[4.71275345,52.01053743]]},"id":"bd699e23-ed8d-42e5-bb16-f1627811c11f","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71005836,52.01153312]},"id":"bcbf89ae-6c09-4dc4-9ac5-3412a0ab3a6e","properties":{"name":"Geel 22"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71162603,52.0126052]},"id":"f1c10410-10e4-4213-a370-219ca85e098c","properties":{"name":"Geel 5","location":"Zeugstraat 84"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71277153,52.01058512]},"id":"f0412f46-cd18-4bc1-a396-acccfcf5972c","properties":{"name":"Geel 7","location":"Willem Vroesenpad"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71007422,52.01035311]},"id":"be331f58-36a9-4745-abde-d055e25034a1","properties":{"name":"Geel 12","location":"Op de brug"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71096377,52.01315532]},"id":"ce604c82-1903-4147-b0aa-96c3794f994e","properties":{"name":"Geel 2","location":"Op paal naast de kaasboerin, Nieuwe Markt"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.70694683,52.01015071]},"id":"bdeeb211-c8dd-4cb0-bdb9-65ad63e311df","properties":{"name":"Geel 13","location":"Einde brug pal tegenover Lage Gouwe 136"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71195297,52.01054196]},"id":"c39a2a11-4134-4cba-8f77-67f04ae67739","properties":{"name":"Geel 8","location":"rechts op het portaal dat toegang geeft tot tuin Catharina Gasthuis"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71089387,52.01285073],[4.71084827,52.01290356],[4.71082815,52.0129927],[4.7108885,52.01311486],[4.71119562,52.01327995]]},"id":"8806ea67-f89a-495f-a6cd-ffd00b810ecf","properties":null},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71030047,52.01050223],[4.71022979,52.01050334],[4.71018017,52.01049839],[4.71015737,52.01049178],[4.71012518,52.01047362],[4.71010238,52.01045134],[4.71008227,52.01041914],[4.71007288,52.01039686],[4.71007288,52.01037622],[4.71007422,52.01035311],[4.70993072,52.01031926],[4.70942517,52.0100304],[4.70876128,52.00967786],[4.7086151,52.0096242],[4.70848501,52.00958953],[4.70838175,52.00957468],[4.70820338,52.00957715],[4.70808536,52.00959449],[4.70799148,52.00962833],[4.70754892,52.00980829],[4.70694683,52.01015071],[4.70672529,52.01002666],[4.70721299,52.00970657],[4.70779455,52.0094594],[4.70819457,52.00935334],[4.70828452,52.00922915],[4.70833951,52.00915238],[4.70852592,52.00897572],[4.70876195,52.00885933],[4.70906638,52.00872229],[4.70918977,52.00867441],[4.70944592,52.00855141],[4.70969275,52.00840802],[4.70988989,52.00825861],[4.71015141,52.00804562],[4.70997438,52.007935],[4.70988721,52.00787969],[4.70983893,52.00784172],[4.71031366,52.00764655],[4.71049407,52.00757443],[4.71061124,52.00751947],[4.71075818,52.00744048],[4.71101298,52.00731912],[4.71133846,52.00719547],[4.7120229,52.00697222]]},"id":"33a3a3db-25b7-42b5-9c09-dbac602f860f","properties":{"name":""}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.71275345,52.01053743],[4.7124516,52.01060376],[4.71205598,52.01056744],[4.71176898,52.01049645],[4.71115744,52.01049727],[4.71103808,52.0105014],[4.71095761,52.01051626],[4.71090129,52.0105435],[4.71062368,52.01056083],[4.71054858,52.0105889],[4.71036619,52.01053855],[4.71030047,52.01050223]]},"id":"0febe0fb-eb3c-4c44-8b03-3a50bbb23c94","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71010164,52.0110467]},"id":"1d77a895-69ee-4f28-9e15-5a7d861049be","properties":{"name":"Geel 21"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7152317,52.00715036]},"id":"0eefac8d-84f5-4679-a035-83ac5e540500","properties":{"name":"Geel 18","location":"Nieuwe Veerstal 7"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71304896,52.00690335]},"id":"227a0e9f-3d54-46f4-aedf-721fc101ae75","properties":{"name":"Geel 16","location":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71398252,52.00703761]},"id":"799e5c42-18d6-4790-875b-dedf9111f489","properties":{"name":"Geel 17","location":"muurtje die op westkant Oosthave pal tegenover tolhuis staat"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71111612,52.00965495]},"id":"59729a53-5c71-4b63-8486-ac7714969d6a","properties":{"name":"Geel 19","location":"Westhaven 16"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71078594,52.01011558]},"id":"87e8719e-6675-457e-bcc8-04d4380986ad","properties":{"name":"Geel 20","location":"Oosthaven 8"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71280247,52.01144425]},"id":"2ea61cb0-6776-4ad6-a6ad-4a5df94499d2","properties":{"name":"Geel 6","location":"Lange Tiendeweg 36"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71056963,52.00753899]},"id":"52be3cd4-f7f3-4611-aa03-3f9a12207716","properties":{"name":"Geel 15","location":"Raam 316"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71055047,52.01058741]},"id":"1f1d6bda-2919-4e07-8125-6d8a7ee4eeda","properties":{"name":"Geel 10","location":"Torenstr/hoek Achter de Kerk"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71022979,52.01050334]},"id":"d38433ca-a04f-4431-92f8-ee084c42eeb7","properties":{"name":"Geel 11","location":"Wijdstraat 14"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71028075,52.01220112]},"id":"c9beb994-ff6e-4db3-94f2-8bf310bf15c5","properties":{"name":"Geel 23","location":"Markt 59"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7071999,52.00971517]},"id":"90c0b8c9-45f0-443d-8c44-e907e4d3bed8","properties":{"name":"Geel 14","location":"Aaltje Bakstr 2a"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7129309,52.01374842]},"id":"82067f07-6f04-41c5-a491-59f506c38da8","properties":{"name":"Geel 3","location":"Hoek Lem Dulstraat/Houtmanspad"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.7107906,52.0121293]},"id":"3bc22f05-2ec4-4875-9cca-8616179df210","properties":{"name":"Geel 1","location":"De Waag"}},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.7107906,52.0121293],[4.71064711,52.01216727],[4.7107088,52.01230842],[4.71089387,52.01285073]]},"id":"012b1f8f-5049-4380-b019-d7e5256bb539","properties":null},{"type":"Feature","geometry":{"type":"LineString","coordinates":[[4.7120229,52.00697222],[4.71209349,52.00696632],[4.71264203,52.00701828],[4.71294914,52.0070546],[4.71334745,52.00710496],[4.71335416,52.00695306],[4.71304896,52.00690335],[4.71335282,52.00695306],[4.71349095,52.0069737],[4.71409367,52.00705207],[4.71462553,52.0071256],[4.71474354,52.00713798],[4.71492325,52.00714458],[4.7152317,52.00715036],[4.71554332,52.00715095],[4.71797342,52.00710993],[4.71797829,52.00715944],[4.71797538,52.00720524],[4.71791771,52.00724486],[4.71781981,52.00727045],[4.71765888,52.0072977],[4.71721765,52.00732742],[4.71702051,52.0073464],[4.71679386,52.00740254],[4.71649368,52.00749956],[4.71629363,52.00772697],[4.71624401,52.00787474],[4.71613159,52.00838369],[4.71605246,52.00875517],[4.71592483,52.00946879],[4.71542751,52.00939246],[4.71531592,52.00937501],[4.71507972,52.00934913],[4.71446325,52.00928184],[4.71396302,52.00922984],[4.71355053,52.00918577],[4.71343597,52.00915719],[4.71335416,52.00913325],[4.71305133,52.00904185],[4.71258973,52.00889551],[4.71238186,52.00883029],[4.71223145,52.00879681],[4.71209888,52.00876838],[4.71203082,52.00875013],[4.7116738,52.00914687],[4.71158691,52.00924605],[4.71143842,52.00938899],[4.71125201,52.00956791],[4.71102332,52.0097144],[4.71061853,52.00997728],[4.71078594,52.01011558],[4.71068,52.01016594],[4.71062903,52.01019813],[4.71056008,52.01024663],[4.71039836,52.0104045],[4.71032729,52.01047879],[4.71028971,52.01049326],[4.71022979,52.01050334],[4.71018017,52.01049839],[4.71015291,52.01062946],[4.71012743,52.01078547],[4.7100784,52.01128203],[4.71004258,52.01173074],[4.71000887,52.01217296],[4.71031656,52.01220483],[4.71048505,52.01220928],[4.7107906,52.0121293]]},"id":"1362e71b-8361-4a93-a617-9258fbcb67ab","properties":{"name":""}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71177193,52.01320537]},"id":"1fcc1442-9ed7-4ab0-86d3-0e54ea5a1550","properties":{"name":"Geel 4","location":"Nieuwe Markt 14"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.71166086,52.01049659]},"id":"4dfbe195-dc91-445f-b896-395c645f4f12","properties":{"name":"Geel 9","location":"zuidzijde poortje"}}]}

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
        {routeYellow && <GeoJSON className="routeGeel" style={style_WrYellow} data={routeYellow} pointToLayer={pointToLayerYellow.bind(this)}>
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

export default GeleRouteLaden;