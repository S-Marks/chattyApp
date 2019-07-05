import React from 'react';

function Message({type, name, content }) {
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
                <span className="notification-content">{} changed their name to {name}</span>
            </div>
        );
    }
}


export default Message;