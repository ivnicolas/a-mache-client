import React from 'react';
import {connect} from "react-redux"

const Post = (props) => {
    console.log(props.post)
    return (
        <div>
            <h2>{props.post.title}</h2>
            <h4>{props.post.description}</h4>
            <h5>{props.post.price}</h5>
        </div>
    );
};


function mapStateToProps(globalState, ownProps){

  
    if(ownProps.match.params.postId){
        
        const postId = parseInt(ownProps.match.params.postId)
        return {post: globalState.post.find(post => post.id === postId)}
    }else {
     
        return {post: globalState.post[globalState.post.length -1]}
    }
   
        
}
export default connect(mapStateToProps)(Post);