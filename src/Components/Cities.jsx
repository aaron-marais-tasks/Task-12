import React from "react"
import {AppContext} from "../App.js"
import ReactTooltip from 'react-tooltip'

import Loader from "./Loader.jsx"
import * as Index from "./Styled/Locations.jsx"

export default function IndexComponent() {
	const ctx = React.useContext(AppContext)

	const [cities, setCities] = React.useState([])
	const [currentTimer, setTimer] = React.useState(null)
	const [hasCities, setHasCities] = React.useState(true)

	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}/${ctx.path.region}`)
			.then(cities => cities.json())
			.then(cities => {
				setCities(cities)
			})
	}, [])

	React.useEffect(() => {
		ctx.done()
		ReactTooltip.rebuild()

		if(currentTimer) clearTimeout(currentTimer)
		setTimer(setTimeout(() => {
			if(cities.length === 0) {
				setHasCities(false)
			}
		}, 1000))

		const onDocKeydown = e => {
		    const char = String.fromCharCode(e.which)
		    if (/[a-z ]/i.test(char) && e.key.length === 1) {
		    	e.preventDefault()
		    	setFilter(f => f + e.key)
		    } else if(e.key === "Backspace") {
		    	setFilter(f => f.slice(0, -1))
		    }
		}

		document.addEventListener("keydown", onDocKeydown)
		return () => document.removeEventListener("keydown", onDocKeydown)
	}, [cities])

	React.useEffect(() => {
		const filtered = cities.filter(country =>
			country.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)
		setFiltered(filtered)
		ctx.filter(filter)
	}, [filter])

	const toDisplay = (filter ? filtered : cities).map(
		(region, index) => {
			return <Index.Location key={index} onClick={
				ctx.submit.bind(null, "city", region)
			}>{region}</Index.Location>
		}
	)

	if(!hasCities) return (
        <Index.Err404>
            <div className="title">
                Whoops
            </div>

            <div className="info">
                Looks like our API does not list this region's cities.
            </div>

            <div className="sub">
                Why don't you <span className="back" onClick={
                    () => ctx.toStep(1)
                }>try again</span>?
            </div>
        </Index.Err404>
	)

	if(cities.length === 0) return <Loader />

	return (
			<Index.Box>
      			<ReactTooltip effect="solid" className="tooltip" />
				<Index.Inputs>
					{toDisplay}
				</Index.Inputs>
			</Index.Box>
	)
}
