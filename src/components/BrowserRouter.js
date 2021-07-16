import React from 'react';
import { Route, Switch} from 'react-router';

import Categories from './Categories';
import Posts from './Posts';
import Header from './Header';
import PostForm from './PostForm';

const BrowserRouter = () => {
    return (
        <Switch>
            <Route exact path='/' render={() =>
                <>
                    <Header />
                    <Categories />
                 </>
                } />
            {/* <Route exact path ='/' component={Categories, Header}/> */}
            <Route exact path ="/subcategories/:subcategoryId/posts" component={Posts}/>
            <Route  exact path ="/categories/:categoryId/posts" component={Posts}/>
            {/* <Route exact path ="subcategories/:id/posts" component={Posts}/> */}
            <Route exact path ='/new-post' component={PostForm}/>

        </Switch>
    );
};

export default BrowserRouter;