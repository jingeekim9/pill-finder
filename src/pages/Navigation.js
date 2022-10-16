import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark" style={{ backgroundColor: "#f0edf2", }}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/" style={{ height: 50 }}>
                        <p style={{ color: "#b0b0b0" }}><span style={{ color: "#02e0b4" }}>Pill</span>-<span style={{ color: "#8230b8" }}>Finder</span> <img
                            alt="img"
                            style={{ maxHeight: "50px" }}
                            src="https://media2.giphy.com/media/2ux0WPoTrYS82F8si2/giphy.gif?cid=790b7611e30fea56d0af482ab7a73a69da6b981e88841d40&rid=giphy.gif&ct=s"></img></p>

                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" style={{ color: "#8230b8", fontSize: 14 }}>
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{ color: "#8230b8", fontSize: 14 }}>
                                    ABOUT
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}