/* eslint-disable react-hooks/exhaustive-deps */

/*
	This file holds my region chooser
*/

// Import Reacat into scope, and application context into script
import React from "react"
import {AppContext} from "../App.js"

// Import our tooltip handler
import ReactTooltip from 'react-tooltip'

// Import our Loader component and location styling
import Loader from "./Loader.jsx"
import * as Index from "./Styled/Locations.jsx"

export default function RegionsComponent() {
    // Use application context for the component
	const ctx = React.useContext(AppContext)

	// Our regions, timer for timeout, and switch if timed out
	const [regions, setRegions] = React.useState([])
	const [currentTimer, setTimer] = React.useState(null)
	const [hasRegions, setHasRegions] = React.useState(true)

	// Filtering regions
	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	// componentDidMount emulation (no items in array argument)
	React.useEffect(() => {
		// Fetch list of regions from my API
		fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}`)
			.then(regions => regions.json())
			.then(regions => {
				// Update regions
				setRegions(regions)
			})
	}, [])

	// componentDidUpdate: regions array
	React.useEffect(() => {
		// Loading is done, rebuild tooltips
		ctx.done()
		ReactTooltip.rebuild()

		// Clear timer if it exists, and make another for time out
		if(currentTimer) clearTimeout(currentTimer)
		setTimer(setTimeout(() => {
			if(regions.length === 0) {
				// If region length is 0 after 1 second of waiting, timed out
				setHasRegions(false)
			}
		}, 1000))

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
	}, [regions])

	// When filter changes, filter out regions
	React.useEffect(() => {
		// Filter regions
		const filtered = regions.filter(region =>
			// If region's name has part of filter in it, filter 
			region.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)

		// Update component filter and header text
		setFiltered(filtered)
		ctx.filter(filter)
	}, [filter])

	// Display based on filtered regions, or all regions, using map
	const toDisplay = (filter ? filtered : regions).map(
		(region, index) => {
			// Each location has a click event bound to application submit
			return <Index.Location key={index} onClick={
				ctx.submit.bind(null, "region", region)
			}>{region}</Index.Location>
		}
	)

	// If no regions found, return a message
	if(!hasRegions) return (
        <Index.Err404>
            <div className="title">
                Whoops
            </div>

            <div className="info">
                Looks like our API does not list this country's regions.
            </div>

            <div className="sub">
                Why don't you <span className="back" onClick={
                    () => ctx.toStep(1)
                }>try again</span>?
            </div>
        </Index.Err404>
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
