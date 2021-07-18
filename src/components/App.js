import logo from '../logo.svg';
import '../App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import NavBar from "./NavBar"
import Categories from './Categories';
import PostForm from './PostForm';

import BrowserRouter from './BrowserRouter';
import {connect} from "react-redux"
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
      <div>
        <Header/>
        <NavBar/>
        <BrowserRouter/>
         {/* <Header/>
          <PostForm/>
          {/* <Navbar/>
          <Footer /> 
          <Categories/> */}
      </div>
    );
  }
}

export default connect (null, {fetchSubcategories,fetchCategories,fetchPosts})(App) ;

