import React, { Component } from 'react';
import { props } from 'bluebird';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.currentUser
        };
        this.displayUser = this.displayUser.bind(this);
    }

    displayUser(event) {
        this.setState({userName: event.target.defaultValue})
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} placeholder="Your Name (Optional)" />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
            </footer>
        );
    }
}