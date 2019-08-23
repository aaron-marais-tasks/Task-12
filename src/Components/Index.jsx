/*
    This file holds my index page
*/

// Load React into scope, and application context into script
import React from "react"
import {AppContext} from "../App.js"

// Import our index page styling
import * as Index from "./Styled/Index.jsx"

export default function IndexComponent() {
    // Use our application context for nextStep
    const ctx = React.useContext(AppContext)

    // Render index page
    return (
        <Index.Home>
            <Index.Welcome>
                Is the weather hot, or not?
            </Index.Welcome>

            <Index.FindOut>
                Why don't we <span className="findOut" onClick={() => ctx.nextStep()}>find out</span>?
            </Index.FindOut>
        </Index.Home>
    )
}