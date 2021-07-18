import React from 'react';
import { Route, Switch} from 'react-router';

import Categories from './Categories';
import About from './About';
import Safety from './Safety';
import Posts from './Posts';
import Header from './Header';
import PostForm from './PostForm';
import Post from './Post';
import SubcategoryPosts from "./SubcategoryPosts"
import CategoryPosts from "./CategoryPosts"

const BrowserRouter = () => {
    return (
        <Switch>
            {/* <Route exact path='/' render={() =>
                <>
                    <Header />
                    <Categories />
                 </>
                } /> */}
            <Route exact path ='/' component={Categories}/>
            <Route exact path ="/subcategories/:subcategoryId/posts" component={Posts}/>
            < Route exact path ="/subcategories/:subcategoryId/posts/:postId" component={Post}/>
            <Route  exact path ="/categories/:categoryId/posts" component={Posts}/>
            < Route exact path ="/categories/:categoryId/posts/:postId" component={Post}/>
            <Route exact path ='/post' component={Post}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path ='/safety' component={Safety}/>
            {/* <Route exact path ="subcategories/:id/posts" component={Posts}/> */}
            <Route exact path ='/new-post' component={PostForm}/>

        </Switch>
    );
};

export default BrowserRouter;