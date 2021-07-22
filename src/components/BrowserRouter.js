import React from 'react';
import { Route, Switch} from 'react-router';

import Categories from './Categories';
import About from './About';
import Safety from './Safety';
import Posts from './Posts';
import PostForm from './PostForm';
import Post from './Post';



const BrowserRouter = () => {
    return (
        <Switch>
            <Route exact path ='/' component={Categories}/>
            <Route exact path ="/subcategories/:subcategoryId/posts" component={Posts}/>
            < Route exact path ="/subcategories/:subcategoryId/posts/:postId" component={Post}/>
            <Route  exact path ="/categories/:categoryId/posts" component={Posts}/>
            < Route exact path ="/categories/:categoryId/posts/:postId" component={Post}/>
            <Route exact path ='/post' component={Post}/>
            <Route exact path ='/post-search' component={Posts}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/safety' component={Safety}/>
            <Route exact path ='/new-post' component={PostForm}/>

        </Switch>
    );
};

export default BrowserRouter;