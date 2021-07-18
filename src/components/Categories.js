import React, { Component } from 'react';
import Subcategories from './Subcategories.js'
import {connect} from "react-redux"
import {fetchCategories} from '../redux/actions/categoryActions.js'
import { Link } from 'react-router-dom';



// you need to understand how this flow is working. why are calling component did mount? why can't you use setState is component did mount?
// do you even need your constructor?
class Categories extends Component {

    constructor(){
        super()
        this.state = {
            categories: []
        }
    }

    // componentDidMount(){ 

    //   this.props.fetchCategories()

    // }

    render() {
        return (
            <ul>
                 {this.props.categories.map(category => 
                <>
                  { console.log("CATE ID", category.id)}
                    <h4 className="test" key={category.id}><Link to={`categories/${category.id}/posts`}>{category.name}</Link></h4>
                    <Subcategories category_id={category.id}/>
                    </>
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
// export default connect(mapStateToProps,{fetchCategories})(Categories);