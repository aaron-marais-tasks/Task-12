import React from "react"
import * as RainType from "../Styled/WeatherTypes/Rain.jsx"

export default function Rain() {
    let step = 0
    const drops = []
    const backDrops = []

    while (step < 100) {
        // Random numbers to use for various randomizations

        // Random number between 98 and 1
        const randoHundo = (Math.floor(Math.random() * 98 + 1))
        // Random number between 5 and 2
        const randoFiver = (Math.floor(Math.random() * (5 - 1) + 2))

        // Step up
        step += randoFiver

        // Add in a new raindrop with various randomizations to certain CSS properties
        drops.push(
            <RainType.Drop left step={step} five={randoFiver} hundred={randoHundo}>
                <RainType.Effect stem hundred={randoHundo} />
                <RainType.Effect splat hundred={randoHundo} />
            </RainType.Drop>
        )

        backDrops.push(
            <RainType.Drop right step={step} five={randoFiver} hundred={randoHundo}>
                <RainType.Effect stem hundred={randoHundo} />
                <RainType.Effect splat hundred={randoHundo} />
            </RainType.Drop>
        )
    }

    // Return raindrops into body
    return [
        <RainType.Rain>{drops}</RainType.Rain>,
        <RainType.Rain backRow>{backDrops}</RainType.Rain>
    ]
}