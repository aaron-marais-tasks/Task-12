/*
	This file holds my loader component
*/

// Import React into scope
import React from "react"

// Import loading container and rippler components from styling
import {LoadingContainer, Ripple} from "./Styled/Loader.jsx"

export default function Loader() {
	// Render loader
    return (
        <LoadingContainer>
	        <Ripple>
	            <div />
	            <div />
	        </Ripple>
        </LoadingContainer>
    )
}
