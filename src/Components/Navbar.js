import React from "react";
import logo from "../assets/logo1.png"

export default function Navbar(){
    return(
        <nav  className="navbar">
            <img src={logo} alt="logo" className="nav--logo"/>
            <h3 className="nav--text">CNG Locator</h3>
            <h3 className="Nav-add-user">Add User</h3>
            <h3 className="Nav-manage-admin">Manage Admin</h3>
        </nav>
    )
}