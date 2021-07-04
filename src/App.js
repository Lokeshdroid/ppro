import React from "react";
import ReactModal from "react-modal";
import {  Router, Switch, Route } from "react-router-dom";
import CasinoSlot from "./pages/CasinoSlot";
import Exchange from "./pages/Exchange";
import SportDetails from "./pages/SportDetails";
import FantasyGames from "./pages/FantasyGames";
import Home from "./pages/Home";
import Others from "./pages/Others";
import OurCasino from "./pages/OurCasino";
import Test from "./pages/test";
import { history } from './helpers/history';

ReactModal.setAppElement('#root');

export default function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sport">
            <Exchange />
          </Route>
          <Route path="/sport-details">
            <SportDetails />
          </Route>
          <Route path="/casino">
            <OurCasino />
          </Route>
          <Route path="/slot">
            <CasinoSlot />
          </Route>
          <Route path="/fantasy">
            <FantasyGames />
          </Route>
          <Route path="/others">
            <Others />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
