import React from "react"
import {AppContext} from "../App.js"

import * as Index from "./Styled/Index.jsx"

export default function IndexComponent() {
    const ctx = React.useContext(AppContext)

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