import React, { Component } from 'react';
import Posts from './Posts.js'

class Subcategories extends Component {

    constructor(props){
        super()
        this.state = {
            category_id: props.category_id,
            subcategories: []
        }
    }

    componentDidMount(){ 

        const url = ` http://localhost:3000/categories/${this.state.category_id}/subcategories.json` 
       
        fetch(url)
        .then(response => response.json())
        .then(allsubcategories =>{
            this.setState({ subcategories: allsubcategories })
        })
        .then(console.log(this.state))
    }

    render() {
        return (
            <div>
                {this.state.subcategories.map(subcategory =>
                    <li key={subcategory.id}>{subcategory.name}</li>)}
            </div>
        );
    }
}

export default Subcategories;