import React from 'react';
import axios from 'axios';
import styles from './viewEvents.module.css';

export default class ViewEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        axios.get('https://deliver-greeting-cards.herokuapp.com/api/events')
        .then((res) => {
            const events = res.data;
            console.log(events);
            this.setState({events});
        })
    }

    render() {
        return (
            <div className="home"> 
                <h1>View Events</h1>
                <table class={styles.tb}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>User ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.events.map(event =>
                                <tr key={event.id}>
                                    <td>{event.id}</td>
                                    <td>{event.event_type}</td>
                                    <td>{event.date}</td>
                                    <td>{event.user_id}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}
