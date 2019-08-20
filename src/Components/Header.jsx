import React from "react"
import ReactTooltip from 'react-tooltip'
import * as Header from "./Styled/Header.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "./Images/logo.png"
import {AppContext} from "../App.js"

export default function HeaderComponent(props) {
	const ctx = React.useContext(AppContext)

	const getCrumbs = () => {
		const crumbs = []

		if(ctx.path.country) {
			crumbs.push(<FontAwesomeIcon key={1} icon="angle-right" />)
			crumbs.push(<span key={2} onClick={() => ctx.toStep(1)}>{ctx.path.country}</span>)
		}

		if(ctx.path.city) {
			crumbs.push(<FontAwesomeIcon key={3} icon="angle-right" />)
			crumbs.push(<span key={4}>{ctx.path.city}</span>)
		}

		return crumbs
	}

	return (
		<Header.Bar>
  			<ReactTooltip effect="solid" className="tooltip" />
			<div className="logo">
				<img src={Logo} />
				<span data-tip="the weather is hot" data-place="right">
					Weather or Not
				</span>
			</div>

			<Header.Filter>
				{ctx.filter()}
				<span>|</span>
			</Header.Filter>

			<Header.Breadcrumbs>
				<span onClick={() => ctx.toStep(0)}>
					<FontAwesomeIcon icon="home" />
				</span>
				{getCrumbs()}
			</Header.Breadcrumbs>
		</Header.Bar>
	)
}
