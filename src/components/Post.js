import React from 'react';
import {connect} from "react-redux"

const Post = (props) => {
    console.log(props.post)
    return (
        <div>
            <h2>{props.post.title}</h2>
            <h4>{props.post.description}</h4>
        </div>
    );
};


function mapStateToProps(globalState, ownProps){
    console.log(ownProps.match.params)
    const postId = parseInt(ownProps.match.params.postId)
    // if(ownProps.match.params[categoryId]){}
    return {post: globalState.post.find(post => post.id === postId)}
        
}
export default connect(mapStateToProps)(Post);