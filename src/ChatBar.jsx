import React, { Component } from 'react';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.currentUser,
            message: '',
            notification: ''
        };
        this.displayUser = this.displayUser.bind(this);
        this.postMessage = this.postMessage.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
    }

    displayUser(event) {
        this.setState({ userName: event.target.defaultValue })
    }

    createMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    changeUsername(event) {
        this.setState({
            userName: event.target.value
        })
    }

    postMessage(event) {
        if (event.key === 'Enter') {
            const newMessage = {
                "id": this.state.id,
                "username": this.state.userName,
                "content": this.state.message,
                "type": "message"
            };
            this.setState({
                message: ''
            });
            this.props.sendMessage(newMessage);
        }
    }

    postNotification = (event) => {
        if (event.key === 'Enter') {
            const notification = {
                "id": this.state.id,
                "username": this.state.userName,
                "type": "notification"
            };
            this.props.sendNotification(notification);
        }
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} placeholder="Your Name (Optional)" onChange={this.changeUsername} onKeyPress={this.postNotification} />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.message} onChange={this.createMessage} onKeyPress={this.postMessage} />
            </footer>
        );
    }
}