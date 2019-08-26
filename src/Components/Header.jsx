/*
	This file holds my header component
*/

// Import React and application context into scope
import React from "react"
import {AppContext} from "../App.js"

// Import React tooltip and fontawesome libraries
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import header styling, and header logo
import * as Header from "./Styled/Header.jsx"
import Logo from "./Images/logo.png"

export default function HeaderComponent(props) {
	// Use application context
	const ctx = React.useContext(AppContext)

	// Generate breadcrumbs from pathing
	const getCrumbs = () => {
		const crumbs = []

		switch(ctx.currentStep) {
			case 4:
				crumbs.push(<span key={4} onClick={() => ctx.toStep(3)}>City select</span>)
				crumbs.push(<FontAwesomeIcon key={3} icon="angle-right" />)

			case 3:
				crumbs.push(<span key={2} onClick={() => ctx.toStep(2)}>Region select</span>)
				crumbs.push(<FontAwesomeIcon key={1} icon="angle-right" />)
			
			case 2:
				crumbs.push(<span key={4} onClick={() => ctx.toStep(1)}>Country select</span>)
				crumbs.push(<FontAwesomeIcon key={3} icon="angle-right" />)

			case 1:
				crumbs.push(
					<span onClick={() => ctx.toStep(0)}>
						<FontAwesomeIcon icon="home" />
					</span>
				)
		}

		return crumbs.reverse()
	}

	// If filtering text component should render
	const Filtering = ctx.currentStep > 0 && ctx.currentStep < 4 && !ctx.loading

	// Render header
	return (
		<Header.Bar>
			{/*	load up react tooltips, as well as logo */}
  			<ReactTooltip effect="solid" className="tooltip" />
			<div className="logo">
				<img src={Logo} alt="Logo" />
				<span data-tip="the weather is hot" data-place="right">
					Weather or Not
				</span>
			</div>

			{/* If filtering, show blinked and text */}
			{Filtering ? (
				<Header.Filter>
					{ctx.filter()}
					<span>|</span>
				</Header.Filter>
			) : null}

			{/* Breadcrumbs */}
			<Header.Breadcrumbs>
				{getCrumbs()}
			</Header.Breadcrumbs>
		</Header.Bar>
	)
}
