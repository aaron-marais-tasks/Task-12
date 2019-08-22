import React from "react"

import {LoadingContainer, Ripple} from "./Styled/Loader.jsx"

export default function Loader() {
    return (
        <LoadingContainer>
	        <Ripple>
	            <div />
	            <div />
	        </Ripple>
        </LoadingContainer>
    )
}
