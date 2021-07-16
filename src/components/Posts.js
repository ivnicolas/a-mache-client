import React, { Component } from 'react';
import {connect} from "react-redux"

class Posts extends Component {
    render() {
        return (
            <div>

                <h1>hi</h1>
                {/* {this.props.posts.map(post =>
                    <>
                    <h4>{post.title}</h4>
                    </>)} */}
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