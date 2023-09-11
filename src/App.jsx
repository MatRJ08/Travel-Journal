import React from "react";
import Navbar from "./Navbar";
import data from "./data";
import Entry from "./Entry";

    

export default function App(){

    const entries = data.map(item =>{
        return(<Entry 
            key={item.googleMapsUrl}
            {...item} 
        />)

    })

    return (<div className="app">
        <Navbar/>
        {entries}

    </div>)
}