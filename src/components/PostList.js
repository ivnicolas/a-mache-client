import React from 'react';
import { Link } from 'react-router-dom';

const PostList = (props) => {

    if(props.filter === true){
        //had to spread props.posts because when calling sort on props.post directly, it mutates the original array 
        return (
            <div>
                <h1>True</h1>
                 {[...props.posts].sort((a, b) => a.title.localeCompare(b.title)).map(post =>
                    <>
                    <h4 className="group-postings"><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title} - {new Date(post.created_at).toLocaleDateString()}</Link></h4>
                    </>)}  
            </div>
        )
    }else{
        
        return (
            <div>
                <h1>No</h1>
                {props.posts.map(post =>
                    <>
                    <h4 className="group-postings"><Link to={`/subcategories/${post.subcategory_id}/posts/${post.id}`}>{post.title} - {new Date(post.created_at).toLocaleDateString()}</Link></h4>
                    </>)} 
            </div>
        );
    }
   
};

export default PostList;


{/* <PostList posts={this.props.posts} filter={this.state.filter}/> */}
// { this.state.filter? 'SORT: ON' : "SORT OFF"}