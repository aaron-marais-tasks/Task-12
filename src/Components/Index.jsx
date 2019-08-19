import React from "react"
import {AppContext} from "../App.js"

import { Find } from "./Styled/Index.jsx"

import { debounce } from "throttle-debounce"

export default function IndexComponent() {
	const ctx = React.useContext(AppContext)

	const [inputValue, setInputValue] = React.useState("")
	const [countries, setCountries] = React.useState([])

	const [filter, setFilter] = React.useState("")
	const [filtered, setFiltered] = React.useState([])

	React.useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all?fields=name")
			.then(countries => countries.json())
			.then(countries => countries.map(country => country.name))
			.then(countries => {
				setCountries(countries)
			})

		const onDocKeydown = e => {
		    const char = String.fromCharCode(e.which)
		    if (/[a-z ]/i.test(char)) {
		    	e.preventDefault()
		    	setFilter(f => f + e.key)
		    } else if(e.key === "Backspace") {
		    	setFilter(f => f.slice(0, -1))
		    }
		}

		document.addEventListener("keydown", onDocKeydown)

		return () => document.removeEventListener("keydown", onDocKeydown)
	}, [])

	React.useEffect(() => {
		const filtered = countries.filter(country =>
			country.toUpperCase().indexOf(filter.toUpperCase()) > -1
		)
		setFiltered(filtered)
	}, [filter])

	const toDisplay = filter ? filtered : countries
	return (
			<Find.Box>
				<Find.Inputs>
					{toDisplay.map(country => 
						<Find.Location onClick={
							ctx.submit.bind(null, "country", country)
						}>{country}</Find.Location>
					)}
				</Find.Inputs>
			</Find.Box>
	)
}
