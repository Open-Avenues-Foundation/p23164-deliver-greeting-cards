import React from "react";
import axios from "axios";
import "./Event.css";

export default class CreateEvent extends React.Component {
    state = {
        eventType: "",
        date: "",
        userId: "",
    };
    
    handleEventName = (event) => {
        this.setState({ eventType: event.target.value });
        console.log(this.state);
    };
    handleDateName = (event) => {
        this.setState({ date: event.target.value });
        console.log(this.state);
    };
    handleUserIdName = (event) => {
        this.setState({ userId: event.target.value });
        console.log(this.state);
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
    
        const data = {
            event_type: this.state.eventType,
            date: this.state.date,
            user_id: this.state.userId,
        };
    
        axios
        .post("https://deliver-greeting-cards.herokuapp.com/api/events", data)
        .then((response) => {
            console.log('ADDED!!');
            console.log(response);
            console.log(response.data);
    
            // Assuming response.data contains the newly created event object
            this.setState(prevState => ({
                events: [...prevState.events, response.data]
            }));
        })
        .catch(error => {
            console.error('Error adding event:', error);
        });
    };

    constructor(props) {
        super(props);
        this.state = {
        events: [],
        };
    }
    
    componentDidMount() {
        axios
        .get("https://deliver-greeting-cards.herokuapp.com/api/events")
        .then((res) => {
            const events = res.data;
            console.log(events);
            this.setState({ events });
        });
    }
    

    
    handleDeleteEvent = id => {
        axios
        .delete(`https://deliver-greeting-cards.herokuapp.com/api/events/${id}`)
        .then((res) => {
            console.log('DELETED!!');
            console.log(res);
            console.log(res.data);
        });
        const updatedEvents = this.state.events.filter(event => event.id !== id);
        this.setState({ events: updatedEvents });
    }
    render() {
        return (
        <div className="Event">
        <div className="postEvent">
            <form onSubmit={this.handleSubmit}>
            <label>
                Event Type:
                <input
                type="text"
                name="eventType"
                onChange={this.handleEventName}
                />
            </label>
            <label>
                Date:
                <input type="text" name="date" onChange={this.handleDateName} />
            </label>
            <label>
                User ID:
                <input type="text" name="userId" onChange={this.handleUserIdName} />
            </label>
            <button type="submit">Add Event</button>
            </form>
        </div>
        
        <div className="Table">
    <div className="home">
        <table>
            <thead>
                <tr>
                    <th className = "header-cell">ID</th>
                </tr>
            </thead>
            <tbody>
                {this.state.events.map((event) => {
                    return (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    <div className="home">
        <table>
            <thead>
                <tr>
                    <th className = "header-cell">Type</th>
                </tr>
            </thead>
            <tbody>
                {this.state.events.map((event) => {
                    return (
                        <tr key={event.id}>
                            <td>{event.event_type}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    <div className="home">
        <table>
            <thead>
                <tr>
                    <th className = "header-cell">Date</th>
                </tr>
            </thead>
            <tbody>
                {this.state.events.map((event) => {
                    return (
                        <tr key={event.id}>
                            <td>{event.date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    <div className="home ">
        <table>
            <thead>
                <tr>
                    <th className = "header-cell">User ID  Action</th>

                </tr>
            </thead>
            <tbody>
                {this.state.events.map((event) => {
                    return (
                        <tr key={event.id}>
                            <td>{event.user_id}</td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    <div className="home butt">
    
        <thead>
            <tr>
                <th className="header-cell" style={{visibility: 'hidden'}}>Hidden Header</th>
            </tr>
        </thead>
        <tbody>
            {this.state.events.map((event) => {
                return (
                    <tr key={event.id}>
                        <td>
                            <button onClick={() => this.handleDeleteEvent(event.id)}>Delete entry</button>
                        </td>
                    </tr>
                );
            })}
        </tbody>

</div>


</div>

    </div>
        );
    }
    }
