import React from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';

const Posts = (props) => {
    if (props.posts.length === 0){
        return (<div className='center'>
            <h1 className="no-posts"> No Posts Found...</h1>
            </div>)
    }else {
        return (
            <>
                <h2 className="postings-title">{props.title}</h2>
                {props.posts.map(post =>
                    <>
                    <h4 className="group-postings"><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title} - {new Date(post.created_at).toLocaleDateString()}</Link></h4>
                    </>)}
            </>
        );
    }
};

function mapStateToProps(globalState, ownProps){
    if (ownProps.match.params.categoryId){
        const id = parseInt(ownProps.match.params.categoryId)
        return {
            posts: globalState.post.filter(post => post.category_id === id),
            title: `${globalState.category.find(category => category.id === id).name} Postings`
       }
    }else if (ownProps.match.params.subcategoryId) {
        const id = parseInt(ownProps.match.params.subcategoryId)
        return {posts: globalState.post.filter(post => post.subcategory_id === id),
                title: `${globalState.subcategory.find(subcategory => subcategory.id === id).name} Postings`
            }
    }else{
        const query = ownProps.history.location.state.input
        return{posts:globalState.post.filter(post => post.title.toLowerCase().includes(query.toLowerCase())),
                title: "Search Results"}
    }
}

export default connect(mapStateToProps)(Posts);