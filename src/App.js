import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import alleRoutes from './Map';
import GroeneRoute from './GroeneRoute/GroeneRoute';
import GeleRoute from './GeleRoute/GeleRoute';
import RodeRoute from './RodeRoute/RodeRoute';
import BlauweRoute from './BlauweRoute/BlauweRoute';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="contentContainer">
      <header className="contentContainer__header"><h1 className="contentContainer__header__h1">Gouda in Beeld & Gedicht</h1></header>

      <section className = "button__section">
        <a href="/project_gouda/alleRoutes">
          <button className='button__alle'>Alle</button>
        </a>
        <a href="/project_gouda/groeneRoute">
          <button className='button button__groen'>Groen</button>
        </a>
        <a href="/project_gouda/geleRoute">
          <button className='button__geel'>Geel</button>
        </a>
        <a href="/project_gouda/rodeRoute">
          <button className='button__rood'>Rood</button>
        </a>
        <a href="/project_gouda/blauweRoute">
          <button className='button__blauw'>Blauw</button>
        </a>
      </section>


      </div>
          <hr />
          <Switch>
              <Route path='/project_gouda/alleRoutes' component={alleRoutes} />
              <Route path='/project_gouda/groeneRoute' component={GroeneRoute} />
              <Route path='/project_gouda/geleRoute' component={GeleRoute} />
              <Route path='/project_gouda/rodeRoute' component={RodeRoute} />
              <Route path='/project_gouda/blauweRoute' component={BlauweRoute} />
          </Switch>
      </Router>
    );
  }
}

export default App;