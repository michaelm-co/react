import React from 'react'
import './hero.css'

const Hero = props =>(
    <div className="hero-section" style={{ backgroundImage : `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
)

export default Hero