import React from 'react';

function NavBar(props) {
    if (props.clients === 1) {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div className="userNum">{props.clients} user logged in.</div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div className="userNum">{props.clients} users logged in.</div>
            </nav>
        )
    }
}

export default NavBar;