import React from "react";

function Card(props){
    return(
        <div className="section">
            <div className="card">
                <img className="destination-image" src={props.img} alt="landscape"/>
                <div className="destination-right">
                    <div className="location">
                        <div className="location-left">
                            <img className="location-symbol" src="location-filled-svgrepo-com.png" alt="location-symbol"/>
                            <p className="country">{props.country}</p>
                        </div>
                        <p className="google-map"><u>View on Google Maps</u></p> 
                    </div>
                    <p className="destination-name">{props.destinationName}</p>
                    <p className="destination-dates">{props.date}</p>
                    <p className="destination-info">{props.info}</p>
                </div>
            </div>
            <hr/>
        </div>         
    )
}

export default Card;


/*
<div className="card">
            <img className="destination-image" src="destination1.png" alt="landscape"/>
            <div className="destination-right">
                <div className="location">
                    <div className="location-left">
                        <img className="location-symbol" src="location-filled-svgrepo-com.png" alt="location-symbol"/>
                        <p className="country">JAPAN</p>
                    </div>
                    <p className="google-map"><u>View on Google Maps</u></p> 
                </div>
                <p className="destination-name">Mount Fuji</p>
                <p className="destination-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="destination-info">Mount Fuji is the tallest mountain in Japan, standing at 3,776 
                                                meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, 
                                                for both Japanese and foreign tourists.
                </p>
            </div>
            <br/>  
        </div>
*/