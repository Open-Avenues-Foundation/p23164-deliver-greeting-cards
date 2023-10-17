import React from "react";
import axios from "axios";
import "./CreateUser.css";

export default class CreateUser extends React.Component {
  state = {
    name: "",
    address_id: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAddressChange = (event) => {
    this.setState({ address_id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: this.state.name,
      address_id: this.state.address_id,
    };

     axios
      .post(
        `https://deliver-greeting-cards.herokuapp.com/api/users`,
        { name: this.state.name,
	  address_id: this.state.address_id },
        { headers: { "content-type": "application/JSON" } },
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
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
            <input
              type="text"
              address_id="address_id"
              onChange={this.handleAddressChange}
            />
          </label>

          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}
