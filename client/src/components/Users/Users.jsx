import React from "react";
import CreateUser from "../CreateUser/CreateUser";
import ViewUsers from "../ViewUsers/ViewUsers";
import "../../App.css";

export default class Users extends React.Component {
  render() {
    return (
<div style={{ display: 'flex', flexDirection: 'row' }}>
    <CreateUser />
    <ViewUsers />
  </div>

    );
  }
}


