import React from 'react';
import axios from 'axios';
import './DeleteUser.css'

export default class DeleteUser extends React.Component {
    state = {
        name: '',
        id: ''
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
        console.log(event);
        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            id: this.state.id
        };

        axios.delete('https://deliver-greeting-cards.herokuapp.com/api/users', data).then(res=> {
            console.log(res);
            console.log(res.data);
        })
    }
    
    render() {
        return (
            <div className="deleteUser"> 
                <form onSubmit = {this.handleSubmit}>
                <label>
                    Person Name:
                    <input type = "text" name = "name" onChange = {this.handleChange} />
                </label>

                <label>
                    User Id:
                    <input type = "text" name = "id" onChange = {this.handleChange} />
                </label>
                <button type = "submit">Delete User</button>
                </form>
            </div>
        );
    }
}
    