import React from "react";
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css.css'; // Letakkan impor CSS setelah impor library eksternal
import './App.css'; // Letakkan impor CSS setelah impor library eksternal


import About from './components/about';
import Navbarjs from './components/navbarjs'; 
import Table from './components/table';
import Tambah from './components/tambah';
import Update from './components/update';
import Dashboard from './components/dashboard'; 
import Home from './components/home'; 
import Login from './auth/login'; 
import Register from './auth/register'; 




function App() {
  return (
    <div className="App">
      <Navbarjs />
      <BrowserRouter>
        <Switch>
         <Route path="/table" component={Table} exact />
          <Route path="/about" component={About} exact />
          <Route path="/tambah_data" component={Tambah} exact />
          <Route path="/update_data" component={Update} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
        </Switch>
      {/* <Json />
      <Data /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
