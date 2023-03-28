import React, { createContext, useState } from 'react'
import App from '../App'


export const multiStepContext = createContext()

const FormDataProvider = () => {
    const [formdata, setFormdata] = useState({})
    const [finalData, setFinalData] = useState({})

  return (
      <multiStepContext.Provider value={{formdata, setFormdata, finalData, setFinalData}}>
        <App/>
      </multiStepContext.Provider>
  )
}
export default FormDataProvider