import React from 'react';

function Message({ name, content }) {
    return (
        <div>
            <div className="message">
                <span className="message-username">{name}</span>
                <span className="message-content">{content}</span>
            </div>
            <div className="message system">
            </div>
        </div>
    );
}


export default Message;