import './App.css'
import { Route } from 'wouter'

// Pages
import Home from './pages/Home'
import { useState } from 'react'

function App() {
  const [link, setLink] = useState('')
  const handleSearchChange = (evt) => setLink(evt.target.value)

  return (
    <div className="App">
      <Route path="/" >
        <Home link={link} handleChange={handleSearchChange} />
      </Route>
    </div>
  )
}

export default App
