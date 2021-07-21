import React, { Component } from 'react';
import Subcategories from './Subcategories.js'
import {connect} from "react-redux"
import { Link } from 'react-router-dom';

class Categories extends Component {

    constructor(){
        super()
        this.state = {
            categories: []
        }
    }

    render() {
        return (
            <ul className="grid-styling" >
                 {this.props.categories.map(category => 
                <div className="card">
                    <h4 className="categories" key={category.id} ><Link to={`categories/${category.id}/posts`} style={{ color: '#D21034' }}>{category.name}</Link></h4>
                    <Subcategories category_id={category.id}/>
                    </div>
                )}
            </ul>
        );
    }
}

function mapStateToProps(globalState) {
    // return an object where the keys are the name of the prop your component wants,
    // values are the actual parts of the global state your component wants
    return {
        categories:globalState.category
    }
}

export default connect(mapStateToProps)(Categories);
