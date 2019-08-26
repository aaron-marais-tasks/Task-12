/*
	This file imports my effects and exports them in an object
*/

// Import React for lazy
import React from "react"

// Export lazy objects
export const Rain = React.lazy(() => import("./Rain.jsx"))
export const PartlyCloudy = React.lazy(() => import("./PartlyCloudy.jsx"))
export const Clear = React.lazy(() => import("./Clear.jsx"))
export const Mist = React.lazy(() => import("./Mist.jsx"))
