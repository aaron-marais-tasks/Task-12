import React from "react"

import {Clear as ClearStyling} from "../Styled/WeatherTypes/Clear.jsx"

export default function Clear() {
    const graphLines = () => {
        const graphs = []
        for(let r = 330; r >= 0; r -= 30)
            graphs.push(
                <g transform={"rotate(" + r + ")"}>
                  <use xlinkHref="#ray" x="85"></use>
                </g>
            )
        return graphs
    }

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
