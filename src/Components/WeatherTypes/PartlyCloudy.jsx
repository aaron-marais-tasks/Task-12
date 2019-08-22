import React from "react"

import {PartlyCloudy as PartlyCloudyStyling} from "../Styled/WeatherTypes/PartlyCloudy.jsx"

export default function PartlyCloudy() {
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
        <PartlyCloudyStyling>
            <svg viewBox="-208 -208 500 500">
                <defs>
                    <line id="ray" x1="-2" x2="20"></line>
                </defs>
                <path id="cloud" d="M-28 113 a52 52 0 1 1 12-103 a70 70 0 0 1 120-8 a58 58 0 1 1 23 111z"></path>
                <mask id="m">
                    <circle style={{fill: "white"}} r="500"></circle>
                    <use style={{fill: "black", stroke: "black", strokeWidth: "calc(2*10px)"}} xlinkHref="#cloud"></use>
                </mask>
                <g style={{mask: "url(#m)", "--i": "-2"}}>
                    <circle r="500" stroke="none"></circle>
                    <g id="osc">
                        <circle r="65"></circle>
                        <g id="rays">
                            {graphLines()}
                        </g>
                    </g>
                </g>
            </svg>
        </PartlyCloudyStyling>
    )
}
