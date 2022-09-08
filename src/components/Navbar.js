import React from "react";
import logoSmall from'../images/logo192.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logoSmall} alt="Small React logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}