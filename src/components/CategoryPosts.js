// import React, { Component } from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';
import { categoryReducer } from '../redux/reducer/categoryReducer';

import React from 'react';

const CategoryPosts = (props) => {
    return (
        <>
            <h1>Category Posts</h1>
            {props.posts.map(post =>
//                  
//                     {console.log('hi')}
                    <h3>{post.title}</h3>
                    
                   )}

        </>
    );
};

// export default CategoryPosts;

// class CategoryPosts extends Component {
//     render() {
//         return (
//             <>
//                 <h1>Category Posts</h1>
//                 {this.props.posts.map(post =>
//                     <>
//                     {console.log('hi')}
//                     <h3>{post.title}</h3>
//                     {/* <h3><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title}</Link></h3> */}
//                     </>)}
//             </>
//         );
//     }
// }

function mapStateToProps(globalState, ownProps){
    const categoryId = parseInt(ownProps.match.params.categoryId)
    console.log(categoryId)

    return {posts: globalState.post.filter(apost => apost.category_id === categoryId)}
    
}

export default connect(mapStateToProps)(CategoryPosts);