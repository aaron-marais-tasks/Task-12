/*
    This file holds my clear day weather effect
*/

// Import React and clear styling into scope
import React from "react"
import {Clear as ClearStyling} from "../Styled/WeatherTypes/Clear.jsx"

export default function Clear() {
    // Graphic lines for the sun's rays
    const graphLines = () => {
        // Array of lines
        const graphs = []

        // Loop from 330 to 0 with a step of -30
        for(let r = 330; r >= 0; r -= 30)
            graphs.push(
                // Push in a graphic which is rotated based on loop value
                <g transform={"rotate(" + r + ")"}>
                  <use xlinkHref="#ray" x="85"></use>
                </g>
            )

        return graphs
    }

    // Render clear effect, with the sun in the SVG
    return (
        <ClearStyling>
            <svg viewBox="-208 -208 500 500">
                <defs>
                    <line id="ray" x1="-2" x2="20"></line>
                </defs>
                <circle r="500" stroke="none"></circle>
                <g id="osc">
                    <circle r="65"></circle>
                    <g id="rays">
                        {graphLines()}
                    </g>
                </g>
            </svg>
        </ClearStyling>
    )
}
