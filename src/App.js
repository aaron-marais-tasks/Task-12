/*
  This file holds my main application
*/

// Import React into script scope
import React from 'react'

// Import required components
import HeaderComponent from "./Components/Header.jsx"
import IndexComponent from "./Components/Index.jsx"
import CountriesComponent from "./Components/Countries.jsx"
import RegionsComponent from "./Components/Regions.jsx"
import CitiesComponent from "./Components/Cities.jsx"
import ResultComponent from "./Components/Result.jsx"

// Export and create application context
export const AppContext = React.createContext({})

function App() {
  // Step: Current step (0: home, 1: country, 2: region, 3: city, 4: result)
  const [step, setStep] = React.useState(0)

  // Loading: True if component loading; False is component completed loading
  const [loading, setLoading] = React.useState(false)

  // Filter: component typing filter
  const [filter, updateFilter] = React.useState(null)

  // Selected country, region and city
  const [country, setCountry] = React.useState(null)
  const [region, setRegion] = React.useState(null)
  const [city, setCity] = React.useState(null)

  // Submit form button (submit country, region and city)
  // Each submission updates step
  const submitForm = (location, value, e) => {
    // Prevent default action
    e.preventDefault()

    // Switch based on if country, region or city
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

  // componentDidUpdate: step
  React.useEffect(() => {
    // If step is > 0 and < 4, set loading to true
    if(step > 0 && step < 4) setLoading(true)
    
    // Switch over step to clear appropriately
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

  // Which of the main components we are loading
  let Rendering
  switch(step) {
    case 0:
      Rendering = IndexComponent
    break

    case 1:
      Rendering = CountriesComponent
    break

    case 2:
      Rendering = RegionsComponent
    break

    case 3:
      Rendering = CitiesComponent
    break

    case 4:
      Rendering = ResultComponent
    break

    default: {}
  }

  // Render with context
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
