import React from "react";
import world from "./assets/world.png"
import flag from "./assets/costarica.png"


export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={world} className="navbar-world" />
            <span className="navbar-title">My Travel Journal</span>
            <a href="https://www.google.co.cr/maps/place/Costa+Rica/@8.3337659,-90.0932057,6z/data=!3m1!4b1!4m6!3m5!1s0x8f92e56221acc925:0x6254f72535819a2b!8m2!3d9.748917!4d-83.753428!16zL20vMDFwOHM?hl=es-419&entry=ttu" >
                <img src={flag} className="navbar-flag"/>
            </a>
        </nav>
    )
}