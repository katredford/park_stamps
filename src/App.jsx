import { useState } from 'react'


import './App.css'
import ApiTest from './components/ApiTest'
import Map from './components/Map'

function App() {
  const handleStateClick = (stateCode) => {
    // You can use the stateCode to make API fetch calls
    console.log(`Selected State: ${stateCode}`);
  };

  return (
    <>
      <ApiTest />
      <Map onStateClick={handleStateClick} />
    </>
  )
}

export default App
