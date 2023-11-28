import { useState } from 'react'

import './App.css'
import ApiTest from './components/ApiTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiTest />
    </>
  )
}

export default App
