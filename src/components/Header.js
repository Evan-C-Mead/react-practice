import React from "react";
import logo1 from "../images/logo192.png";

export default function Header() {
    return (
        <header className="nav-header">
            <nav className="nav">
                <img src={logo1} className="nav-logo" alt="logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
