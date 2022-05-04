// import logo from './logo.svg';
// import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
// import HospitalList from './Component/HospitalList'
import Hospitals from './Component/Hospitals'
import Login from './Component/Login'
import Signup from './Component/Signup'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hospitals/>
      </div>
    )
  }
}

