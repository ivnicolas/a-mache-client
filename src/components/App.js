import '../App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import NavBar from "./NavBar"
import Routes from './Routes';
import {connect} from "react-redux"

import Footer from './Footer'
import {fetchCategories} from '../redux/actions/categoryActions.js'
import { fetchSubcategories } from '../redux/actions/subcategoryActions.js';
import { fetchPosts} from '../redux/actions/postActions.js'

class App extends Component {

  componentDidMount(){ 

    this.props.fetchCategories()
    this.props.fetchSubcategories()
    this.props.fetchPosts()

  }
  render() {
    return (
      <div id="page-container">
         <div id="content-wrap">
        <Header/>
        <NavBar/>
        <Routes/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default connect (null, {fetchSubcategories,fetchCategories,fetchPosts})(App) ;

