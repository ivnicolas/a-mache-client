import React, { Component } from 'react';
import Posts from './Posts.js'
import {connect} from "react-redux"
import { fetchSubcategories } from '../redux/actions/subcategoryActions.js';
import { Link } from 'react-router-dom';


class Subcategories extends Component {

    
    constructor(props){
        super()
        this.state = {
            category_id: props.category_id,
            // subcategories: []
        }
    }

    // filterbycatergory = (test) => {
    //     test.category_id === this.state.c
    // }

    // componentDidMount(){ 

    //     this.props.fetchSubcategories()

    //     // console.log(this.props.fetchSubcategories())

    //     //  this.setState({ subcategories: this.props.subcategories() })
    //     // debugger
    //     // console.log(this.state.category_id)

    //     // const url = ` http://localhost:3000/categories/${this.state.category_id}/subcategories.json` 
       
    //     // fetch(url)
    //     // .then(response => response.json())
    //     // .then(allsubcategories =>{
    //     //     this.setState({ subcategories: allsubcategories })
    //     // })
    //     // .then(console.log(this.state))
    // }

    render() {
        return (
            <div>
              
                {this.props.subcategories.map(subcategory =>
                    <li key={subcategory.id}><Link to={`/subcategories/${subcategory.id}/posts`}>{subcategory.name}</Link></li>)}
            </div>
        );
    }
}

function mapStateToProps(globalState,ownProps) {

//     //thank the lord. map state to props can take in two arguments. state and ownProps. own Props is used 
//     // if your component needs the data from its own props to retrieve data from the store. This argument will contain all 
//     // of the props given to the wrapper component that was generated by connect.


//     // console.log(ownProps.category_id)
//     // return an object where the keys are the name of the prop your component wants,
//     // values are the actual parts of the global state your component wants
//     // return{subcategories:globalState.subcategory}
//     // console.log({fetchSubcategories(ownProps)})
//     // debugger
//     // return{subcategories: fetchSubcategories(ownProps.category_id)}
  
    // test1
    return {
        subcategories:globalState.subcategory.filter(x => x.category_id === ownProps.category_id)
    }
}

// debugger 

    // const mapDispatchToProps = {
    
    //     subcategories: fetchSubcategories(3)
    // }

// const mapDispatchToProps = (dispatch,ownProps) => {
//     return {
//       // dispatching actions returned by action creators
//       subcategories: () => {fetchSubcategories()}
      
//     }
//   }

//   export default connect(null,mapDispatchToProps)(Subcategories);
export default connect(mapStateToProps,{fetchSubcategories})(Subcategories);