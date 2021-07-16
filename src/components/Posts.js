import React, { Component } from 'react';
import {connect} from "react-redux"
// import Post from "./Post"
import { Link ,useHistory, useParams} from 'react-router-dom';
// import { useHistory, useParams } from 'react-router-dom'


class Posts extends Component {

   
    render() {
        return (
            <div>

                {this.props.posts.map(post =>
                    
                    <>
                    <h3><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title}</Link></h3>
                    </>)}
            </div>
        );
    }
}


function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
    return {
        posts:globalState.post
    }
}

export default connect(mapStateToProps)(Posts);