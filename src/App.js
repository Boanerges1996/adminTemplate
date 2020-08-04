import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage";
import Login from "./components/login";
import Admin from "./components/main/admin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Admin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
