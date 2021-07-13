import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import Categories from './Categories';


const App = () =>(
  <div>
  <Header/>
  {/* <Navbar/>
  <Footer /> */}
  <Categories/>
  </div>
)

export default App;