import React from "react"
import {AppContext} from "../App.js"

import * as Index from "./Styled/Result.jsx"
import * as WeatherTypes from "./WeatherTypes"

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
            <WeatherTypes.Rain />
            <div>

            </div>
        </React.Fragment>
    )
}
