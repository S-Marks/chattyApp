import React from 'react';

function Message({ type, name, newUser, content }) {
    if (type === 'message') {
        return (
            <div className="message" >
                <span className="message-username">{name}</span>
                <span className="message-content">{content}</span>
            </div>
        )
    } else if (type === 'notification') {
        return (
            <div className="notification">
                <span className="notification-content">{name} changed their name to {newUser}</span>
            </div>
        );
    }
}


export default Message;