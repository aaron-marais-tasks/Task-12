/*
    This file holds the weather results
*/

// Import React into scope, and applicaton context into script
import React from "react"
import {AppContext} from "../App.js"

// Import Loader component, and Result styling, andd Weather Types
import Loader from "./Loader.jsx"
import * as Result from "./Styled/Result.jsx"
import * as WeatherTypes from "./WeatherTypes"

export default function ResultComponent() {
    // Use application context for the component
    const ctx = React.useContext(AppContext)

    // Country's 2-letter code
    const [countryIsoCode, setCountryCode] = React.useState("")

    // Weather object
    const [weather, setWeather] = React.useState({})

    // componentDidMount simulation (empty array for second argument)
    React.useEffect(() => {
        // Fetch the 2-letter country code from my API
        fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}/${ctx.path.region}/${ctx.path.city}`)
            .then(code => code.json())
            .then(code => {
                // Update country code state
                setCountryCode(code.country_code)
            })
    }, [])

    // componentDidUpdate (countryIsoCode watcher)
    React.useEffect(() => {
        // If country code is empty, don't execute below
        if(countryIsoCode === "") return

        // Fetch the weather data from the weather API
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ctx.path.city},${encodeURIComponent(countryIsoCode)}&appid=01bc30c35e610cfeddfa7e05ffc5f017`)
            .then(weather => weather.json())
            .then(weather => {
                // Update weather object state
                setWeather(weather)
            })
    }, [countryIsoCode])

    // If still loading, show loader
    if(Object.keys(weather).length === 0) return <Loader />

    // If weather API returns 404, display error message
    if(weather.cod === "404") return (
        <Result.Err404>
            <div className="title">
                Whoops
            </div>

            <div className="info">
                Looks like our API does not list this city.
            </div>

            <div className="sub">
                Why don't you <span className="back" onClick={
                    () => ctx.toStep(1)
                }>try again</span>?
            </div>
        </Result.Err404>
    )

    // Our weather type variable and switch to set weather type
    let WeatherType
    switch(weather.weather[0].main) {
        case "Rain":
            WeatherType = WeatherTypes.Rain
        break

        case "Clouds":
            WeatherType = WeatherTypes.PartlyCloudy
        break

        case "Clear":
            WeatherType = WeatherTypes.Clear
        break

        case "Mist":
        case "Haze":
            WeatherType = WeatherTypes.Mist
        break

        default: {}
    }

    // Convert UNIX epoch time stamp into readable time
    const getTimeFromStamp = timestamp => {
        // Convert timestamp to milliseconds
        const date = new Date(timestamp*1000)

        const hours = date.getHours(),
            minutes = "0" + date.getMinutes(),
            seconds = "0" + date.getSeconds()

        // Display date time in MM-dd-yyyy h:m:s format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    }

    // Render weather component
    return (
        <Result.Box>
            {/* Load our weather type using lazy components */}
            <React.Suspense fallback={() => null}>
                <WeatherType />
            </React.Suspense>

            {/* Our weather status (clear, rainy, ...) */}
            <Result.Status>
                {weather.weather[0].main}
            </Result.Status>

            {/* Min, average, max temperatures */}
            <Result.Temperature>
                <Result.Temperature.Min>
                    <div className="desc">
                        Min
                    </div>
                    <div className="val">
                        {weather.main.temp_min}°C
                    </div>
                </Result.Temperature.Min>

                <Result.Temperature.Avg>
                    {weather.main.temp}°C
                </Result.Temperature.Avg>

                <Result.Temperature.Max>
                    <div className="desc">
                        Max
                    </div>
                    <div className="val">
                        {weather.main.temp_max}°C
                    </div>
                </Result.Temperature.Max>
            </Result.Temperature>

            {/* Stats for pressure and humidity */}
            <Result.Statistic>
                <Result.Statistic.Value>
                    <div className="desc">
                        Pressure
                    </div>
                    <div className="val">
                        {weather.main.pressure} hPa
                    </div>
                </Result.Statistic.Value>

                <Result.Statistic.Value>
                    <div className="desc">
                        Humidity
                    </div>
                    <div className="val">
                        {weather.main.humidity}
                    </div>
                </Result.Statistic.Value>
            </Result.Statistic>

            {/* Other info (wind speed, sunrise time, ...) */}
            <Result.Other>
                <Result.Other.Item>
                    <div className="desc">
                        Wind
                    </div>
                    <div className="val">
                        {weather.wind.speed} KM/H @ {weather.wind.deg}°
                    </div>
                </Result.Other.Item>

                <Result.Other.Item>
                    <div className="desc">
                        Sunrise
                    </div>
                    <div className="val">
                        {getTimeFromStamp(weather.sys.sunrise)}
                    </div>
                </Result.Other.Item>

                <Result.Other.Item>
                    <div className="desc">
                        Sunset
                    </div>
                    <div className="val">
                        {getTimeFromStamp(weather.sys.sunset)}
                    </div>
                </Result.Other.Item>
            </Result.Other>
        </Result.Box>
    )
}
