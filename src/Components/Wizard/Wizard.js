
import React, { Component } from 'react'
import axios from 'axios';


class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0

        }}
       
        handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }
        handleClick = () => {
           
            const {name,address,city, state,zip} = this.state;
            axios.post('/api/houser', {
                name,
                address,
                city, 
                state,
                zip
            }).then(response => {
               console.log(response)
               this.setState({
                name: "",
                address: "",
                city: "",
                state: "",
                zip: 0
               })
            }).catch(error => {
               console.log(error)
           })
       }



    render() {
        const {name,address,city,state,zip} = this.state
        return (
            // <div>
            //     <h1>wizard</h1>
            // </div>

            <div className = 'main'>

        
            
            <h3>Property Name</h3> <br/>
            <input classname ='addToForm' type = "text" onChange={this.handleChange} name='name' /> <br/>
            
            <h3>Address</h3> <br/>
            <input classname ='addToForm'type = "text" onChange={this.handleChange} name='address' /><br/>
            <h3>City</h3> <br/>
            <input classname ='addToForm' type = "text" onChange={this.handleChange} name='city' /> <br/>
            
            <h3>State</h3> <br/>
            <input classname ='addToForm'type = "text" onChange={this.handleChange} name='state' /><br/>
            <h3>Zip</h3> <br/>
            <input classname ='addToForm'type = "text" onChange={this.handleChange} name='zip' /><br/>

            
            
  
            
            <button className = 'button' onClick={this.handleClick}>Complete</button>
            <button className = 'button' onClick = {this.deleteProducts}>Cancel</button>
        </div>
        )
    }
}
export default Wizard