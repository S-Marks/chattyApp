import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map((message) => {
      return (
          <Message
            type={message.type}
            key={message.id}
            name={message.username}
            content={message.content}
            newUser={message.newUser}
          />
      );
    });
    return (<main className = "messages">{ messages }</main>);
  }
}

export default MessageList;