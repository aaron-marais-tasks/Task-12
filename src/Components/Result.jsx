import React from "react"
import {AppContext} from "../App.js"

import Loader from "./Loader.jsx"
import * as Result from "./Styled/Result.jsx"
import * as WeatherTypes from "./WeatherTypes"

export default function ResultComponent() {
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
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ctx.path.city},${encodeURIComponent(countryIsoCode)}&appid=01bc30c35e610cfeddfa7e05ffc5f017`)
            .then(weather => weather.json())
            .then(weather => {
                setWeather(weather)
            })
    }, [countryIsoCode])

    if(Object.keys(weather).length === 0) return <Loader />

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

    let WeatherType = () => null
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

    const getTimeFromStamp = timestamp => {
        // Convert timestamp to milliseconds
        const date = new Date(timestamp*1000)

        const hours = date.getHours(),
            minutes = "0" + date.getMinutes(),
            seconds = "0" + date.getSeconds()

        // Display date time in MM-dd-yyyy h:m:s format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    }

    return (
        <Result.Box>
            <WeatherType />

            <Result.Status>
                {weather.weather[0].main}
            </Result.Status>

            <Result.Temperature>
                <Result.Temperature.Min>
                    <div className="desc">
                        Min
                    </div>
                    <div className="temp">
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
                    <div className="temp">
                        {weather.main.temp_max}°C
                    </div>
                </Result.Temperature.Max>
            </Result.Temperature>

            <Result.Statistic>
                <Result.Statistic.Value>
                    <div className="desc">
                        Pressure
                    </div>
                    <div className="val">
                        {weather.main.pressure}
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
