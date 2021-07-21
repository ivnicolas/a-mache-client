import React from 'react';
import {connect} from "react-redux"

const Post = (props) => {

    let price
    if(props.post.price === null){
       price = "Unlisted"
    }else{
        price = (props.post.price).toLocaleString('en-US', {
            style: 'currency',
            currency: 'HTG',
          })
    }

    return (
        <div className="post">
            <h2 className="postings-title">{props.post.title}</h2>
                <h6>Contact Email: {props.post.contact_email}</h6>
                <h6>Contact Phone: {props.post.contact_phone}</h6>
                <h6>Price: {price}</h6>
            <h4>Description: {props.post.description}</h4>
           
        </div>
    );
};

function mapStateToProps(globalState, ownProps){
    if(ownProps.match.params.postId){ 
        const postId = parseInt(ownProps.match.params.postId)
        return {post: globalState.post.find(post => post.id === postId)}
    }else {
        //the last post created. this component will be rendered after a new posting is created 
        return {post: globalState.post[globalState.post.length -1]}
    }
}
export default connect(mapStateToProps)(Post);