import React from "react";
import axios from "axios";
import "./CreateUser.css";

export default class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address_id: "",
      events: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://deliver-greeting-cards.herokuapp.com/api/events")
      .then((res) => {
        const events = res.data;
        this.setState({ events });
      });
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAddressChange = (event) => {
    this.setState({ address_id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      address_id: this.state.address_id,
    };

    axios
      .post("https://deliver-greeting-cards.herokuapp.com/api/users", data)
      .then((response) => {
        console.log('ADDED!!');
        console.log(response);
        console.log(response.data);
        // Reloading the page
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error adding event:', error);
      });
  };

  render() {
    return (
      <div className="postUser">
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleNameChange} />
          </label>
          <label>
            Address ID:
            <input type="text" name="address_id" onChange={this.handleAddressChange} />
          </label>
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}
