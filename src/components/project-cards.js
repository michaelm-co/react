import React from 'react'
import './card.css'
import Tilt from 'react-tilt'

const ProjectCards = props =>(
    <Tilt className="Tilt" options={{
        reverse:        false,  // reverse the tilt direction
        max:            25,     // max tilt rotation (degrees)
        perspective:    1500,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          300,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }}
    style={{
        height: 500,
        width: 370
    }}>
        <div className="project-cards" style={{ backgroundImage : `url(${props.backgroundImage})` }}>
    
        </div>
    </Tilt>

)

export default ProjectCards