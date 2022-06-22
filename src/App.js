// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import React from 'react';
// import Map from './Map';
// import Button from './button';

// function groeneRoute(){
//   console.log('groen');
// }

// function rodeRoute(){
//   console.log('Rood');
// }

// function blauweRoute(){
//   console.log('Blauw');
// }

// function geleRoute(){
//   console.log('Geel');
// }

// function alleRoutes(){
//   console.log('alleRoutes');
// }


// function App() {
//   return (
//     <div className="contentContainer">
//     <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Gouda in Beeld & Gedicht</h1></header>
//             <section>
//                 <button onClick = {alleRoutes}>Alle</button>
//                 <button className="button__groen" onClick = {groeneRoute}>Groen</button>
//                 <button className="button__rood" onClick = {rodeRoute}>Rood</button>
//                 <button className="button__blauw" onClick={blauweRoute}>Blauw</button>
//                 <button className="button__geel" onClick={geleRoute}>Geel</button>
//             </section>
//         <Map />
//         <footer className="contentContainer__footer">© 2022</footer>
//       </div>
//   )
// }

// export default App;


// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import alleRoutes from './Map';
import GroeneRoute from './GroeneRoute';
import GeleRoute from './GeleRoute';
import RodeRoute from './RodeRoute';
import BlauweRoute from './BlauweRoute';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="contentContainer">
      <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Gouda in Beeld & Gedicht</h1></header>
      <section className = "button__section">
        <a href="./alleRoutes">
          <button className='button__alle'>Alle</button>
        </a>
        <a href="./groeneRoute">
          <button className='button button__groen'>Groen</button>
        </a>
        <a href="./geleRoute">
          <button className='button__geel'>Geel</button>
        </a>
        <a href="./rodeRoute">
          <button className='button__rood'>Rood</button>
        </a>
        <a href="./blauweRoute">
          <button className='button__blauw'>Blauw</button>
        </a>
      </section>
      </div>
          <hr />
          <Switch>
              <Route path='/alleRoutes' component={alleRoutes} />
              <Route path='/groeneRoute' component={GroeneRoute} />
              <Route path='/geleRoute' component={GeleRoute} />
              <Route path='/rodeRoute' component={RodeRoute} />
              <Route path='/blauweRoute' component={BlauweRoute} />
          </Switch>
      </Router>
    );
  }
}

export default App;