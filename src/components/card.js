import React from 'react'
import './project-cards.css'
import { Parallax } from 'react-scroll-parallax' 

const Card = props =>(
    <Parallax
        className="custom-class"
        offsetYMax={70}
        offsetYMin={-30}
        slowerScrollRate
    >
        <div className = "card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>

            <svg className="downArrow animated bounce" width="41px" height="41px" viewBox="0 0 41 41" version="1.1">
                <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Group-3" transform="translate(20.500000, 20.500000) rotate(90.000000) translate(-20.500000, -20.500000) translate(12.000000, 15.000000)">
                        <rect id="Rectangle-8" fill="#000000" x="0" y="5" width="16" height="1"></rect>
                        <polyline id="Rectangle-9" stroke="#000000" transform="translate(11.000000, 5.485281) rotate(45.000000) translate(-11.000000, -5.485281) " points="7.12132034 1.60660172 14.8786797 1.60660172 14.8786797 9.36396103"></polyline>
                    </g>
                </g>
            </svg>
        </div>
    </Parallax>
)

export default Card