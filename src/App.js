import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {HashRouter } from "react-router-dom";

import Header from './Components/Header/Header';
// import House from "./Components/House/House";
// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import routes from "./routes";



class App extends React.Component {
  render() {
    return (
    <HashRouter>
    <div className="App">
    <header>
      <Header/>
      {routes}
    </header>
     
    </div> </HashRouter>
  );
}}

export default App;
