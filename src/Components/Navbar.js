import React from "react";
import logo from "../assets/logo1.png"
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <nav  className="navbar">
            <Link to="/"><img src={logo} alt="logo" className="nav--logo"/></Link>
            <h3 className="nav--text">CNG Locator</h3>
            <Link className="Nav-add-user" to="/users">Add User</Link>
            <Link className="Nav-add-user" to="/manageaddmin">Manage Admin</Link>
        </nav>
    )
}