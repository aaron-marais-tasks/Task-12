/*
	This file holds my countries list
*/

// Import React and application context into scope
import React from "react"
import {AppContext} from "../App.js"

// Import React tooltip library
import ReactTooltip from 'react-tooltip'

// Import loader component and location styling
import Loader from "./Loader.jsx"
import * as Index from "./Styled/Locations.jsx"

export default function CountriesComponent() {
	// Use application context
	const ctx = React.useContext(AppContext)

	// List of countries
	const [countries, setCountries] = React.useState([])

	// Filtering by country
	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	// componentDidMount simulation (array argument with no dependencies)
	React.useEffect(() => {
		// Fetch countries from my API
		fetch("https://api.aaronleem.co.za/locations/")
			.then(countries => countries.json())
			.then(countries => {
				// Set countries list
				setCountries(countries)
			})
	}, [])

	// componentDidUpdate: countries list
	React.useEffect(() => {
		// Loading done, rebuild tooltips
		ctx.done()
		ReactTooltip.rebuild()

		// Filter event
		const onDocKeydown = e => {
			// Get char from char code, and check if letter and length is 1 char
		    const char = String.fromCharCode(e.which)
		    if (/[a-z ]/i.test(char) && e.key.length === 1) {
		    	// Prevent default acction and update filter
		    	e.preventDefault()
		    	setFilter(f => f + e.key)
		    } else
		    // If backspace is pressed, remove 1 char
		    if(e.key === "Backspace") {
		    	setFilter(f => f.slice(0, -1))
		    }
		}

		// Add keydown listener to doc, and return a function to unbind on unload
		document.addEventListener("keydown", onDocKeydown)
		return () => document.removeEventListener("keydown", onDocKeydown)
	}, [countries])

	// When filter changes, filter out regions
	React.useEffect(() => {
		// Filter regions
		const filtered = countries.filter(countries =>
			// If country's name has part of filter in it, filter 
			countries.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)

		// Update component filter and header text
		setFiltered(filtered)
		ctx.filter(filter)
	}, [filter])

	// Display based on filtered regions, or all regions, using map
	const toDisplay = (filter ? filtered : countries).map(
		(country, index) => {
			// Each location has a click event bound to application submit
			if(country === "Aruba")
				// Little easter egg for Aruba
				return <Index.Location key={index} onClick={
					ctx.submit.bind(null, "country", country)
				} data-tip="Aruba ? More like Arriba!">{country}</Index.Location>

			return <Index.Location key={index} onClick={
				ctx.submit.bind(null, "country", country)
			}>{country}</Index.Location>
		}
	)

	// If component still loading, show loader component
	if(ctx.loading) return <Loader />
	
	// Render our box with tooltip enabled
	return (
			<Index.Box>
      			<ReactTooltip effect="solid" className="tooltip" />
				<Index.Inputs>
					{toDisplay}
				</Index.Inputs>
			</Index.Box>
	)
}
