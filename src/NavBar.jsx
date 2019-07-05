import React from 'react';

function NavBar({ num }) {
    if (num === 1) {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div className="userNum">{num} user logged in.</div>
            </nav>
        )
    } else {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div className="userNum">{num} users logged in.</div>
            </nav>
        )
    }
}

export default NavBar;