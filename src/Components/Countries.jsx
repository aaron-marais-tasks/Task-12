import React from "react"
import {AppContext} from "../App.js"
import ReactTooltip from 'react-tooltip'

import Loader from "./Loader.jsx"
import * as Index from "./Styled/Locations.jsx"

export default function IndexComponent() {
	const ctx = React.useContext(AppContext)

	const [countries, setCountries] = React.useState([])

	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		fetch("https://api.aaronleem.co.za/locations/")
			.then(countries => countries.json())
			.then(countries => {
				setCountries(countries)
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
		const filtered = countries.filter(country =>
			country.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)
		setFiltered(filtered)
		ctx.filter(filter)
	}, [filter])

	React.useEffect(() => {
		ReactTooltip.rebuild()
	}, [countries])

	const toDisplay = (filter ? filtered : countries).map(
		(country, index) => {
			if(country === "Aruba")
				return <Index.Location key={index} onClick={
					ctx.submit.bind(null, "country", country)
				} data-tip="Aruba ? More like Arriba!">{country}</Index.Location>

			return <Index.Location key={index} onClick={
				ctx.submit.bind(null, "country", country)
			}>{country}</Index.Location>
		}
	)

	if(countries.length === 0) return <Loader />
	
	return (
			<Index.Box>
      			<ReactTooltip effect="solid" className="tooltip" />
				<Index.Inputs>
					{toDisplay}
				</Index.Inputs>
			</Index.Box>
	)
}
