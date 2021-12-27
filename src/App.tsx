import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Error404 from "./components/Error404/Error404";
import Exploration from "./components/Exploration/Exploration";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import NavalBase from "./components/NavalBase/NavalBase";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import React from "react";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Exploration">
          <Exploration />
        </Route>
        <Route path="/navalbase">
          <NavalBase />
        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
        <Route path="/profile/:id" component={Profile} />
        <Route path="*" exact={true} component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
