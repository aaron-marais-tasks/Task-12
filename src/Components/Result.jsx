import React from "react"
import {AppContext} from "../App.js"

import * as Index from "./Styled/Result.jsx"
import * as WeatherTypes from "./WeatherTypes"

export default function IndexComponent() {
    const ctx = React.useContext(AppContext)

    const [countryIsoCode, setCountryCode] = React.useState("")
    const [weather, setWeather] = React.useState({})

    React.useEffect(() => {
        fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}/${ctx.path.region}/${ctx.path.city}`)
            .then(code => code.json())
            .then(code => {
                setCountryCode(code.country_code)
            })
    }, [])

    React.useEffect(() => {
        if(countryIsoCode === "") return
        fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${ctx.path.city},${encodeURIComponent(countryIsoCode)}&appid=01bc30c35e610cfeddfa7e05ffc5f017`)
            .then(weather => weather.json())
            .then(weather => {
                setWeather(weather)
            })
    }, [countryIsoCode])

    let WeatherType = () => null
    if(Object.keys(weather).length > 0) {
        switch(weather.weather[0].main) {
            case "Rain":
                WeatherType = WeatherTypes.Rain
            break

            default: {}
        }
    }

    return (
        <React.Fragment>
            <WeatherType />
            <div>

            </div>
        </React.Fragment>
    )
}
