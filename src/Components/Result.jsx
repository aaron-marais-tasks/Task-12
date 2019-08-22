import React from "react"
import {AppContext} from "../App.js"

import * as Index from "./Styled/Result.jsx"

const Rain = () => {
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
            <Index.Drop left step={step} five={randoFiver} hundred={randoHundo}>
                <Index.Effect stem hundred={randoHundo} />
                <Index.Effect splat hundred={randoHundo} />
            </Index.Drop>
        )

        backDrops.push(
            <Index.Drop right step={step} five={randoFiver} hundred={randoHundo}>
                <Index.Effect stem hundred={randoHundo} />
                <Index.Effect splat hundred={randoHundo} />
            </Index.Drop>
        )
    }

    // Return raindrops into body
    return [
        <Index.Rain>{drops}</Index.Rain>,
        <Index.Rain backRow>{backDrops}</Index.Rain>
    ]
}

export default function IndexComponent() {
    const ctx = React.useContext(AppContext)

    const [countryIsoCode, setCountryCode] = React.useState("")
    const [weather, setForecast] = React.useState({})

    React.useEffect(() => {
        fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}/${ctx.path.region}/${ctx.path.city}`)
            .then(code => code.json())
            .then(code => {
                setCountryCode(code.country_code)
            })
    }, [])

    React.useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${ctx.path.city},${encodeURIComponent(countryIsoCode)}&appid=01bc30c35e610cfeddfa7e05ffc5f017`)
            .then(weather => weather.json())
            .then(weather => {
                setForecast(weather)
            })
    }, [countryIsoCode])

    return (
        <React.Fragment>
            {Object.keys(weather).length > 0 ? <Rain /> : null}
            <div>

            </div>
        </React.Fragment>
    )
}