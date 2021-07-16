import './App.css';
import React,  { useState , useEffect } from "react";
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard';
import {loginValidation} from "./Stor/Action/index";
import { ProtectedRoute } from "./ProtectedRoute";
import Home from "./components/Home";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/setting">
          <SignIn/>
          </Route>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;