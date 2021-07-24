import React, { Component } from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';


class Posts extends Component {
    constructor(props){
        super()
        this.state = {
            filter: false

        }
    }

    
    handleClick = (e) =>{
        e.preventDefault()

        this.setState(prevState => ({
            filter: !prevState.filter
          }))
       
    }

    // componentDidUpdate(prevProps, prevState) {
    //         if (prevState.filter === true) {
    //             this.props.posts.sort((a, b) => a.title.localeCompare(b.title))
    //         }else{
    //             this.props.posts.sort((a, b) => a.created_at.localeCompare(b.created_at))
    //         }
    // }


    render(){


    if (this.props.posts.length === 0){
        return (<div className='center'>
            <h1 className="no-posts"> No Posts Found...</h1>
            </div>)
    }else {
        return (
            <>
                <h2 className="postings-title">{this.props.title}</h2>
                <button onClick={this.handleClick} value={this.state.filter} name="filter">{ this.state.filter? 'SORT: ON' : "SORT OFF"}</button>
                <PostList posts={this.props.posts} filter={this.state.filter}/>
            
            </>
        );
    }
    };

}       

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