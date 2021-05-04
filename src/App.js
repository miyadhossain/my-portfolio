import "aos/dist/aos.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import HeaderProject from "./components/HeaderProject/HeaderProject";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <HeaderProject></HeaderProject>
        </Route>
        <Route path="/getInTouch">
          <GetInTouch></GetInTouch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
