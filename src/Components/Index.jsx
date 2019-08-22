import React from "react"
import {AppContext} from "../App.js"

import {Home} from "./Styled/Index.jsx"

export default function IndexComponent() {
    const ctx = React.useContext(AppContext)

    return (
        <Home>
            <span onClick={ctx.nextStep}>Next</span>
        </Home>
    )
}