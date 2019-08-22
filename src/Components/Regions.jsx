import React from "react"
import {AppContext} from "../App.js"
import ReactTooltip from 'react-tooltip'

import Loader from "./Loader.jsx"
import * as Index from "./Styled/Locations.jsx"

export default function IndexComponent() {
	const ctx = React.useContext(AppContext)

	const [regions, setRegions] = React.useState([])

	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		fetch(`https://api.aaronleem.co.za/locations/${ctx.path.country}`)
			.then(regions => regions.json())
			.then(regions => {
				setRegions(regions)
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
		const filtered = regions.filter(country =>
			country.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)
		setFiltered(filtered)
		ctx.filter(filter)
	}, [filter])

	React.useEffect(() => {
		ReactTooltip.rebuild()
	}, [regions])

	const toDisplay = (filter ? filtered : regions).map(
		(region, index) => {
			return <Index.Location key={index} onClick={
				ctx.submit.bind(null, "region", region)
			}>{region}</Index.Location>
		}
	)

	if(regions.length === 0) return <Loader />

	return (
			<Index.Box>
      			<ReactTooltip effect="solid" className="tooltip" />
				<Index.Inputs>
					{toDisplay}
				</Index.Inputs>
			</Index.Box>
	)
}
