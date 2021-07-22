import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; //look up what this does 

class Search extends Component {
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }
    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 
   
    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.history.push({
        pathname: '/posts',
        state: { input: this.state.input }
        })
        this.setState({input:""})
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit} >
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.input} name="input"/>
                            <input  className="btn btn-outline-success my-2 my-sm-0" type="submit" value= "Search" style={{ color:'white'}}/>
            </form>
        );
    }
}

export default withRouter(Search);