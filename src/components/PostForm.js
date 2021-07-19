import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPosts} from '../redux/actions/postActions'
import DropdownOptions from './DropdownOptions.js'
import Post from './Post';

class PostForm extends Component {

    constructor(){
        super()
        this.state = {
            title: "",
            description: "", 
            price: "" , 
            photo:"",
            contact_email: "", 
            contact_phone:  "",
            category: "", 
            subcategory: "",
            errors: []
        }
    }
    // state = {
    //     title: "",
    //     description: "", 
    //     price: "" , 
    //     photo:"",
    //     contact_email: "", 
    //     contact_phone:  "",
    //     category: "", 
    //     subcategory: ""
    // }

    handleChange =(e) => {
       
        this.setState({
            [e.target.name] : e.target.value
        })

        console.log(this.state)
    

    } 

    isBlank(value){      
        return(value == undefined || value == null || value.trim() == '');
    }

    validate(title,description,category, subcategory) {
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];
      
        if (this.isBlank(title)) {
          errors.push("Title can't be empty");
        }
        if (this.isBlank(description)) {
            errors.push("Description can't be empty");
        }
        if (this.isBlank(category)) {
            errors.push("Category field must be completed");
        }
        if (this.isBlank(subcategory)) {
            errors.push("Subategory field must be completed");
          }
        return errors;
      }

    handleSubmit = (e) =>{
        e.preventDefault()
       
        const title = this.state.title 
        const description = this.state.description
        const category = this.state.category
        const subcategory = this.state.subcategory 

        const errors = this.validate(title,description,category, subcategory);
        if (errors.length > 0) {
            console.log(errors)
        this.setState({errors:errors });
        debugger
        return;
        }else {
            let newpost = {
                title: this.state.title,
                description: this.state.description, 
                price: this.state.price, 
                photo: this.state.photo, 
                contact_email: this.state.email, 
                contact_phone: this.state.contact_phone, 
                category: this.state.category, 
                subcategory: this.state.subcategory, 
                tags: this.state.tags
            }
              
            console.log(newpost)
            this.props.addPosts(newpost)
            this.props.history.push('/post')
            this.setState({title: "",description: "", price: "" , photo:"",contact_email: "", contact_phone:  "",category: "", subcategory: ""})
            // this.props.history.push('/post')
        }
        // this.props.addPosts(this.state)
        // this.props.history.push('/post')
        // this.setState({title: "",description: "", price: "" , photo:"",contact_email: "", contact_phone:  "",category: "", subcategory: ""})
        // // this.props.history.push('/post')
    }

    handleDropdown=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        return (
       
    
                   
                    this.props.subcategories.map(subcategory=>
                       { 
                        //    console.log("STATE",parseInt(this.state.category))
                        //     console.log("SUBCATEGORY",subcategory.category_id)
                        if( subcategory.category_id == parseInt(this.state.category)){
                            console.log("STATE",parseInt(this.state.category))
                            console.log("SUBCATEGORY",subcategory.category_id)
                            return <option value={subcategory.name}>{subcategory.name}</option>
                                }
                        }
                    )
    )
    }


    render() {
        console.log("IN RENDER" ,this.state)
        return (

            
            <form onSubmit={this.handleSubmit}>

               {this.state.errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))} 

               {/* {if(this.state.errors){
                   this.state.erros.map((error => (
                    <p key={error}>Error: {error}</p>
                  )))
               }} */}
               
              

                
                <label>Title: </label>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title"  required/>
                <br/>
                <label>Description: </label>
                <textarea type="text" value={this.state.description} onChange={this.handleChange} name="description"  required/>
                <br/>
                <label>Price: </label>
                <input type="number" step="any" value={this.state.price} onChange={this.handleChange} name="price"  />
                <br/>
                <label>Photo: </label>
                <input type="text" value={this.state.photo} onChange={this.handleChange} name="photo"  />
                <br/>
                <label>Contact Email: </label>
                <input type="email" value={this.state.contact_email} onChange={this.handleChange} name="contact_email"  />
                <br/>
                <label>Contact Phone: </label>
                <input type="tel" value={this.state.contact_phone} onChange={this.handleChange} name="contact_phone"  placeholder="509 23-45-6789" pattern="[0-9]{3} [0-9]{2}-[0-9]{2}-[0-9]{4}" required/>
                <br/>
                <small>Format: 123-45-678</small>
                <br/>
                <label>Category: </label>
                {/* <input type="text" value={this.state.category} onChange={this.handleChange} name="category"  /> */}
                <select value={this.state.category} onChange={this.handleChange} name="category" required>
                    <option value =""> </option>
                    {this.props.categories.map(category=>
                        <option value={category.id}>{category.name}</option>)}
                    {/* <option value={this.state.category} onChange={this.handleChange} name="category">Jobs</option> */}
                    {/* <option value ="Jobs">Jobs </option>
                    <option value ="For Sale">For Sale </option> */}
                </select>
                <br/>
                <label>Subcategory: </label>
                <select value={this.state.subcategory} onChange={this.handleDropdown} name="subcategory">
                    <option value =""> </option>
                    <DropdownOptions categoryID={this.state.category} subcategories={this.props.subcategories}/>
                </select>
            {/* <label>Subcategory: </label>

           
                <select value={this.state.subcategory} onChange={this.handleDropdown} name="subcategory">
                <option value =""> </option>
                {this.handleDropdown}
                </select> */}



{/* 
                <label>Subcategory: </label>
                <input type="text" value={this.state.subcategory} onChange={this.handleChange} name="subcategory"  /> */}
                <input type="submit" value= "Create Post"/>

            </form>
        );
    }
}

function mapStateToProps(globalState) {

        return {
            categories:globalState.category,
            subcategories:globalState.subcategory
        }
}

export default connect(mapStateToProps, {addPosts})(PostForm);