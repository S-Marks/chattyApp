import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { name: '' },
      messages: [],
      users: []
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
  }

  sendMessage(newMessage) {
    this.ws.send(JSON.stringify(newMessage))
  }

  sendNotification(notification) {
    this.ws.send(JSON.stringify(notification))
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.ws = new WebSocket('ws://localhost:3001');
    this.ws.onopen = () => {
      console.log('connected');
    }
    this.ws.onmessage = e => {
      const message = JSON.parse(e.data);
      console.log(message)
      switch (message.type) {
        case "message":
          const messages = this.state.messages.concat(message)
          this.setState({ messages: messages });
          break;

        case "notification":
          const notification = this.state.messages.concat(message)
          this.setState({ messages: notification });
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser.name} sendMessage={this.sendMessage} sendNotification={this.sendNotification}/>
      </div>
    );
  }
}