import React from "react";
import "./../style/navbar.css"

export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-body">
                <a href="#home" className="navbar-item">About</a>
                <a href="#skills" className="navbar-item">Skills</a>
                <a href="#contact" className="navbar-item">Contact</a>
                <a href="#current-project" className="navbar-item">Current Project</a>
            </ul>
        </nav>
    )
}