import React from "react";
import axios from "axios";
import './CreateEvent.css'

export default class CreateEvent extends React.Component {
    state = {
        eventType: '',
        date: '',
        userId: ''
    }

    handleEventName = event => {
        this.setState({ eventType: event.target.value });
        console.log(this.state);
    }
    handleDateName = event => {
        this.setState({ date: event.target.value });
        console.log(this.state);
    }
    handleUserIdName = event => {
        this.setState({ userId: event.target.value });
        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault();

        const data = {
            event_type: this.state.eventType,
            date: this.state.date,
            user_id: this.state.userId
        };

        axios.post('https://deliver-greeting-cards.herokuapp.com/api/events', data).then(res=> {
            console.log(res);
            console.log(res.data);
        })
    }


    render() {
        return (
            <div className="postEvent"> 
                <form onSubmit = {this.handleSubmit}>
                <label>
                    Event Type:
                    <input type = "text" name = "eventType" onChange = {this.handleEventName} />
                </label>
                <label>
                    Date:
                    <input type = "text" name = "date" onChange = {this.handleDateName} />
                </label>
                <label>
                    User Id:
                    <input type = "text" name = "userId" onChange = {this.handleUserIdName} />
                </label>
                <button type = "submit">Add Event</button>
                </form>
                
            </div>
        );
    }
}
