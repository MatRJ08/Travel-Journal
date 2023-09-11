import React from "react";
import world from "./assets/world.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={world} className="navbar-world" />
            <span className="navbar-title">My Travel Journal</span>
        </nav>
    )
}