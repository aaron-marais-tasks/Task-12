import React from "react"
import {AppContext} from "../App.js"

const Rain = () => {
  let step = 0
  const drops = []
  const backDrops = []

  while (step < 100) {
    // couple random numbers to use for various randomizations

    // Random number between 98 and 1
    const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1))
    // Random number between 5 and 2
    const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2))

    // Step up
    step += randoFiver

    // Add in a new raindrop with various randomizations to certain CSS properties
    drops.push(
        <div className="drop" style={{
            left: step + '%', bottom: (randoFiver + randoFiver - 1 + 100) + '%',
            animationDelay: '0.' + randoHundo + 's', animationDuration: '0.5' + randoHundo + 's'
        }}>
            <div className="stem" style={{
                animationDelay: '0.' + randoHundo + 's',
                animationDuration: '0.5' + randoHundo + 's'
            }} />
            <div className="splat" style={{
                animationDelay: '0.' + randoHundo + 's',
                animationDuration: '0.5' + randoHundo + 's'
            }} />
        </div>
    )

    backDrops.push(
        <div className="drop" style={{
            right: step + '%', bottom: (randoFiver + randoFiver - 1 + 100) + '%',
            animationDelay: '0.' + randoHundo + 's', animationDuration: '0.5' + randoHundo + 's'
        }}>
            <div className="stem" style={{
                animationDelay: '0.' + randoHundo + 's',
                animationDuration: '0.5' + randoHundo + 's'
            }} />
            <div className="splat" style={{
                animationDelay: '0.' + randoHundo + 's',
                animationDuration: '0.5' + randoHundo + 's'
            }} />
        </div>
    )
  }

  return [<div className="rain front-row">{drops}</div>, <div className="rain back-row">{backDrops}</div>]
}

export default function IndexComponent() {
    const ctx = React.useContext(AppContext)

    const [countryIsoCode, setCountryCode] = React.useState("")
    const [forecast, setForecast] = React.useState({})

    React.useEffect(() => {
        fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}/${ctx.path.region}/${ctx.path.city}`)
            .then(code => code.json())
            .then(code => {
                setCountryCode(code.country_code)
            })
    }, [])

    React.useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${ctx.path.city},${encodeURIComponent(countryIsoCode)}&appid=01bc30c35e610cfeddfa7e05ffc5f017`)
            .then(forecast => forecast.json())
            .then(forecast => {
                setForecast(forecast)
            })
    }, [countryIsoCode])

    return (
        <div style={{position: "relative"}}>
            {Object.keys(forecast).length > 0 ? <Rain /> : null}
            <div>

            </div>
        </div>
    )
}