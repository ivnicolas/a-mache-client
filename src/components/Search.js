import React, { Component } from 'react';
import SearchResults from './SearchResults';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            input: "",
            submitted: false
        }
    }
    handleChange =(e) => {
        debugger
        this.setState({
            [e.target.name] : e.target.value
        })

    } 
   
    handleSubmit = (e) =>{

        e.preventDefault()
    //     // const input = this.state.input
    //   return  <Posts search={this.state.input}/>
    this.setState({
        submitted: true
       })
 
    }

    render() {
        if(this.state.submitted) {
            return <SearchResults input={this.state.input}/>
          }
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.input} name="input"/>
                            <input  className="btn btn-outline-success my-2 my-sm-0" type="submit" value= "Search" style={{ color:'white'}}/>
                            {/* <input className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{color: 'white'}}>Search</input> */}
            </form>
        );
    }
}

export default Search;