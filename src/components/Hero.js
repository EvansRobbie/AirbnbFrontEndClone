import React from 'react'

export default function Hero(){
    return(
        <section className="hero">
            <img src={require("../assets/photogrid.png")} className="heroImage" alt=''/>
            <h1 className="heroHeader">Online Experiences</h1>
            <p className="heroParah">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}