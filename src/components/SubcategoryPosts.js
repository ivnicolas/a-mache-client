import React, { Component } from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';

class SubcategoryPosts extends Component {
    render() {
        return (
            <div>
                <h1>Subcategory Posts </h1>
            </div>
        );
    }
}
function mapStateToProps(globalState, ownProps){
    console.log(ownProps)

}


export default connect(mapStateToProps)(SubcategoryPosts);