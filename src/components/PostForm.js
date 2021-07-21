import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPosts} from '../redux/actions/postActions'
import DropdownOptions from './DropdownOptions.js'


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
    handleChange =(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    } 

    isBlank(value){      
        return(value === undefined || value === null || value.trim() === '');
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
        this.setState({errors:errors });
        return;
        }else {
            // you cant have errors past into addPost, so you create a new object 
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
            this.props.addPosts(newpost)
            this.props.history.push('/post')
            this.setState({title: "",description: "", price: "" , photo:"",contact_email: "", contact_phone:  "",category: "", subcategory: ""})
        }   
    }

    handleDropdown=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        return (
                    this.props.subcategories.map(subcategory=>
                       { 
                        if( subcategory.category_id === parseInt(this.state.category)){
                            return <option value={subcategory.name}>{subcategory.name}</option>
                                }
                        }
                    )
    )
    }


    render() {

        return (
           
            <form className="form-style-9" onSubmit={this.handleSubmit}>
               {this.state.errors.map(error => (
                 <p key={error}>Error: {error}</p>
                 ))} 
                <label>Title: </label>
                <br/>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title"  required/>
                <br/>
                <label>Description: </label>
                <br/>
                <textarea type="text" value={this.state.description} onChange={this.handleChange} name="description"  required/>
                <br/>
                <label>Price: </label>
                <br/>
                <input type="number" step="any" value={this.state.price} onChange={this.handleChange} name="price"  />
                <br/>
                <label>Photo: </label>
                <br/>
                <input type="text" value={this.state.photo} onChange={this.handleChange} name="photo"  />
                <br/>
                <label>Contact Email: </label>
                <br/>
                <input type="email" value={this.state.contact_email} onChange={this.handleChange} name="contact_email"  />
                <br/>
                <label>Contact Phone: </label>
                <br/>
                <input type="tel" value={this.state.contact_phone} onChange={this.handleChange} name="contact_phone"  placeholder="509 23-45-6789" pattern="[0-9]{3} [0-9]{2}-[0-9]{2}-[0-9]{4}" required/>
                <br/>
                <small>Format: 509 123-45-678</small>
                <br/>
                <label>Category: </label>
                <br/>
                <select value={this.state.category} onChange={this.handleChange} name="category" required>
                    <option value =""> </option>
                    {this.props.categories.map(category=>
                        <option value={category.id}>{category.name}</option>)}
                </select>
                <br/>
                <label>Subcategory: </label>
                <br/>
                <select value={this.state.subcategory} onChange={this.handleDropdown} name="subcategory">
                    <option value =""> </option>
                    <DropdownOptions categoryID={this.state.category} subcategories={this.props.subcategories}/>
                </select>
                <br/>
                <br/>
                <div class="text-center">
                <input type="submit" value= "Create Post" style={{ background: '#00209F' , color:'white'}}/>
                </div>
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