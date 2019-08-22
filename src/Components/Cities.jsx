import React from "react"
import {AppContext} from "../App.js"
import ReactTooltip from 'react-tooltip'

import Loader from "./Loader.jsx"
import * as Index from "./Styled/Locations.jsx"

export default function IndexComponent() {
	const ctx = React.useContext(AppContext)

	const [cities, setCities] = React.useState([])

	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}/${ctx.path.region}`)
			.then(cities => cities.json())
			.then(cities => {
				setCities(cities)
			})

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

		ReactTooltip.rebuild()
		return () => document.removeEventListener("keydown", onDocKeydown)
	}, [])

	React.useEffect(() => {
		const filtered = cities.filter(country =>
			country.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)
		setFiltered(filtered)
		ctx.filter(filter)
	}, [filter])

	React.useEffect(() => {
		ReactTooltip.rebuild()
	}, [cities])

	const toDisplay = (filter ? filtered : cities).map(
		(region, index) => {
			return <Index.Location key={index} onClick={
				ctx.submit.bind(null, "city", region)
			}>{region}</Index.Location>
		}
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
