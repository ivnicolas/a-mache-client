import React, { Component } from 'react';
import Subcategories from './Subcategories.js'

class Categories extends Component {

    constructor(){
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount(){ 

        const url = "http://localhost:3000/categories.json"
    
        fetch(url)
        .then(response => response.json())
        .then(allcategories =>{
            this.setState({ categories: allcategories })
        })
    }

    render() {
        return (
            <ul>
                 {this.state.categories.map(category => 
                <>
                     
                     <h4 className="test" key={category.id}>{category.name}</h4>
                    <Subcategories category_id={category.id}/>
                    </>
                )}
            </ul>
        );
    }
}

export default Categories;