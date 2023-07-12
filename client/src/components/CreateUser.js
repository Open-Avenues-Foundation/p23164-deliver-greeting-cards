import React from 'react';
import axios from 'axios';
import './CreateUser.css'

export default class CreateUser extends React.Component {
    state = {
        name: '',
        address_id: ''
    }

   
    handleChange = event => {
        this.setState({name : event.target.value});
        console.log(event);
        console.log(this.state);
    }
    handleChange1 = event => {
        this.setState({address_id : event.target.value});
        console.log(event);
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            address_id : this.state.address_id
        };

        console.log(user);
        axios.post(`https://deliver-greeting-cards.herokuapp.com/api/users`, {headers : {"content-type" : "application/JSON"}}, {user} )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div className="postUser"> 
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                
                    <label>
                        Address ID:
                    <input type= "text" address_id="address_id" onChange={this.handleChange1}/>
                    </label>
    
                    <button type="submit">Add User</button>
                </form>
            </div>
        );
    }
}
