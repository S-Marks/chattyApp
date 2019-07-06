import React from 'react';

function NavBar(props) {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
            <div className="userNum">{props.clients} users logged in.</div>
        </nav>
    )
}

export default NavBar;