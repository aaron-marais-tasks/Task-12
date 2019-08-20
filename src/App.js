import React from 'react'
import ReactTooltip from 'react-tooltip'

import CountriesComponent from "./Components/Countries.jsx"
import HeaderComponent from "./Components/Header.jsx"

export const AppContext = React.createContext({})

function App() {
  const [step, setStep] = React.useState(0)
  const [country, setCountry] = React.useState(null)
  const [filter, updateFilter] = React.useState(null)
  const [city, setCity] = React.useState(null)

  const submitForm = (location, value, e) => {
    e.preventDefault()

    switch(location) {
      case "country":
        setCountry(value)
        setStep(2)
      break

      case "city":
        setCity(value)
        setStep(3)
      break

      default: {}
    }
  }

  React.useEffect(() => {
    switch(step) {
      case 0:
        setCountry(null)
        setCity(null)
      break

      case 1:
        setCity(null)
      break

      default: {}
    }
  }, [step])

  const Rendering = (() => {
    console.log(country, step)
    switch(step) {
      case 0:
        return () => <span onClick={() => setStep(1)}>Next</span>
      break

      case 1:
        return CountriesComponent
      break

      case 2:
        return () => null
      break

      default: {}
    }
  })()

  return (
    <AppContext.Provider value={{
      submit: submitForm,
      nextStep: () => setStep(s => s + 1),
      prevStep: () => setStep(s => s - 1),
      toStep: stepNumber => setStep(stepNumber),
      path: {city, country},
      filter: txt => txt !== undefined ? updateFilter(txt) : filter
    }}>
      <HeaderComponent />
      <Rendering />
    </AppContext.Provider>
  );
}

export default App;
