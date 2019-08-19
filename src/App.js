import React from 'react';

import { Index } from "./Components/Styled/Index.jsx"

import IndexComponent from "./Components/Index.jsx"

export const AppContext = React.createContext({})

function App() {
  const [step, setStep] = React.useState(0)
  const [country, setCountry] = React.useState(null)
  const [city, setCity] = React.useState(null)

  const submitForm = (location, value, e) => {
    e.preventDefault()

    switch(location) {
      case "country": {
        setCountry(value)
        setStep(s => s + 1)
      } break

      case "city": {
        setCity(value)
      } break

      default: {}
    }
  }

  let rendering
  switch(step) {
    case 0: {
      rendering = <IndexComponent />
    } break

    case 1: {
      rendering = null
    } break

    case 2: {

    } break

    default: {}
  }

  return (
    <AppContext.Provider value={{
      submit: submitForm,
      nextStep: () => setStep(s => s + 1),
      prevStep: () => setStep(s => s - 1),
      path: {city, country}
    }}>
      {rendering}
    </AppContext.Provider>
  );
}

export default App;
