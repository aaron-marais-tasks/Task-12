import React from 'react'

import HeaderComponent from "./Components/Header.jsx"
import IndexComponent from "./Components/Index.jsx"
import CountriesComponent from "./Components/Countries.jsx"
import RegionsComponent from "./Components/Regions.jsx"
import CitiesComponent from "./Components/Cities.jsx"
import ResultComponent from "./Components/Result.jsx"

export const AppContext = React.createContext({})

function App() {
  const [step, setStep] = React.useState(0)
  const [loading, setLoading] = React.useState(false)
  const [filter, updateFilter] = React.useState(null)
  const [country, setCountry] = React.useState(null)
  const [city, setCity] = React.useState(null)
  const [region, setRegion] = React.useState(null)

  const submitForm = (location, value, e) => {
    e.preventDefault()

    switch(location) {
      case "country":
        setCountry(value)
        setStep(2)
      break

      case "region":
        setRegion(value)
        setStep(3)
      break

      case "city":
        setCity(value)
        setStep(4)
      break

      default: {}
    }
  }

  React.useEffect(() => {
    if(step > 0 && step < 4) setLoading(true)
      
    switch(step) {
      case 0:
        setCountry(null)
        setRegion(null)
        setCity(null)
      break

      case 1:
        setRegion(null)
        setCity(null)
      break

      case 2:
        setCity(null)
      break
    }
  }, [step])

  const Rendering = (() => {
    switch(step) {
      case 0:
        return IndexComponent

      case 1:
        return CountriesComponent

      case 2:
        return RegionsComponent

      case 3:
        return CitiesComponent

      case 4:
        return ResultComponent

      default: {}
    }
  })()

  return (
    <AppContext.Provider value={{
      submit: submitForm,
      currentStep: step,
      loading,
      done: () => setLoading(false),
      nextStep: () => setStep(s => s + 1),
      prevStep: () => setStep(s => s - 1),
      toStep: stepNumber => setStep(stepNumber),
      path: {city, region, country},
      filter: txt => txt !== undefined ? updateFilter(txt) : filter
    }}>
      <HeaderComponent />
      <Rendering />
    </AppContext.Provider>
  );
}

export default App;
