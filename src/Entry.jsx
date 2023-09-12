import React from "react";
import pinpoint from "./assets/pinpoint.png"

export default function Entry(props){
    let date
    if(props.startDate && props.endDate){
        date = `${props.startDate} - ${props.endDate}`
    }else if(props.startDate){
        date = `${props.startDate}`;
    }else if(props.endDate){
        date = `${props.endDate}`;
    }
         
    return (
        <div className="entry">
            <img src= {props.imageUrl} className="entry-image" />
            <section className="entry-details">
                <div className="entry-header">
                    <img className="entry-pinpoint" src={pinpoint} />
                    <span className="entry-location">{props.location}</span>
                    <a className="entry-MapsUrl" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="entry-title">{props.title}</h1>
                {<h2 className="entry-date">{date}</h2>}
                <p>{props.description}</p>
            </section>
        </div>
    )
}