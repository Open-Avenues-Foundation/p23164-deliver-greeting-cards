import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../components/ViewEvents/ViewEvents.css";  


export const App = () => {
const [events, setEvents] = useState([]);
const [users, setUsers] = useState([]);

useEffect(() => {
    // Fetch events
    axios
    .get("https://deliver-greeting-cards.herokuapp.com/api/events")
    .then((res) => setEvents(res.data));

    // Fetch users
    fetch("https://deliver-greeting-cards.herokuapp.com/api/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);

const handleDeleteEvent = (id) => {
    axios
    .delete(`https://deliver-greeting-cards.herokuapp.com/api/events/${id}`)
    .then(() => {
        setEvents(events.filter(event => event.id !== id));
    });
}

const handleDeleteUser = async (id) => {
    try {
    await fetch(`https://deliver-greeting-cards.herokuapp.com/api/users/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    setUsers(users.filter(user => user.id !== id));
    } catch (err) {
    console.error("Error deleting user", err.message);
    }
};

return (
    <div>
      {/* Events Section */}
    <div className="header">
        {/* ... rest of the Events rendering logic ... */}
        {events.map((event) => (
        <button onClick={() => handleDeleteEvent(event.id)}>Delete entry</button>
        ))}
    </div>
      {/* Users Section */}
    <div className="header">
        {/* ... rest of the Users rendering logic ... */}
        {users.map((user) => (
        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        ))}
    </div>
    </div>
);
};

export default App;
