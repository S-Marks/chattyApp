import React, { Component } from 'react';

export default class ChatBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.currentUser,
            message: ''
        };
        this.displayUser = this.displayUser.bind(this);
        this.checkKeyPress = this.checkKeyPress.bind(this);
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

    checkKeyPress(event) {
        if (event.key === 'Enter') {
            const newMessage = {
                "id": this.state.id,
                "username": this.state.userName,
                "content": this.state.message
            };
            this.setState({
                message: ''
            });
            this.props.sendMessage(newMessage);
        }
    }

    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" defaultValue={this.state.userName} placeholder="Your Name (Optional)" onChange={this.changeUsername} />
                <input className="chatbar-message" placeholder="Type a message and hit ENTER" value={this.state.message} onChange={this.createMessage} onKeyPress={this.checkKeyPress} />
            </footer>
        );
    }
}