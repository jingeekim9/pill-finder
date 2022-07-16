import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark" style={{ backgroundColor: "rgb(25, 118, 210)", }}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Pill-Finder
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}