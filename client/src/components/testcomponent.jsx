import React from "react";
import axios from "axios";
import LoginButton from './LoginButton'; 
import './testcomponent.css';
export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [], // This will hold the fetched user data
        };
    }

    // Fetch users data from the server when the component mounts
    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        axios
            .get('https://deliver-greeting-cards.herokuapp.com/api/auth_users')
            .then((response) => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    };

    render() {
        // Directly displaying fetched user data as text
        return (
            
            <div>
                <div className="loginbutton"><LoginButton /> </div>
                
                {this.state.users.map((user) => (
                    <div key={user.id}>
                        <p>ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                        
                    </div>      
                ))}
            </div>
            
        );
    }
}
