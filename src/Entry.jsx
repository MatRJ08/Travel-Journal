import React from "react";
import pinpoint from "./assets/pinpoint.png"

export default function Entry(props){
    //props.map(prop => {console.log(prop.description)})  
    console.log(props.description)
    return (
        <div className="entry">
           <img src= {props.imageUrl} className="entry-image" />
           <section className="details">
                <div className="country">
                    <img src={pinpoint} />
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
           </section>
        </div>
    )
}
/*title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: "https://source.unsplash.com/WLxQvbMyfas"*/ 