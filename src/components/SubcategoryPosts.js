

import React from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';


const SubcategoryPosts = (props) => {
    if (props.posts == 0){
                    return (
                        <div>
                            <h1> No Posts Found</h1>
                        </div>
                    )
                }else {
                    return (
                        <>
                            <h1>Subcategory Posts </h1>
                            {props.posts.map(post =>
                                <>
                                {/* <h3>{post.title}</h3> */}
                                <h3><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title}</Link></h3>
                                </>)}
                        </>
                    );
                }
};


// const SubcategoryPosts = (props) => {
    
//         if (this.props.posts == 0){
//             return (
//                 <div>
//                     <h1> No Posts Found</h1>
//                 </div>
//             )
//         }else {
//             return (
//                 <>
//                     <h1>Subcategory Posts </h1>
//                     {this.props.posts.map(post =>
//                         <>
//                         {/* <h3>{post.title}</h3> */}
//                         <h3><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title}</Link></h3>
//                         </>)}
//                 </>
//             );
//         }
       
//     }
// }
function mapStateToProps(globalState, ownProps){
    console.log("Category or Subcategory", ownProps.match.params)

    const subcategoryId = parseInt(ownProps.match.params.subcategoryId)
    return {posts: globalState.post.filter(post => post.subcategory_id === subcategoryId)}
        
}

export default connect(mapStateToProps)(SubcategoryPosts);