import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import EricContainer from './components/Eric'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EricContainer/>
  )
}

export default App