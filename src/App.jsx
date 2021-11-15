import { useState } from 'react'

import { Route } from 'wouter'

// Services
import youtubeService from './services/youtube'

// Pages
import Home from './pages/Home'

import './App.css'

function App() {
  const [link, setLink] = useState('')
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Util
  const validateLink = (link) => {
    setError('')
    if (link.length === 0) {
      setError('Se necesita un enlace de Youtube')
      return false
    }

    if (!(link.startsWith('https://www.youtube.com') || link.startsWith('https://youtu.be'))) {
      setError('Pegue un enlace válida de Youtube')
      return false
    }
    return true
  }

  // Events
  const NO_OP = () => {}

  const handleSearchChange = (evt) => setLink(evt.target.value)

  const handleSearchSubmit = (evt) => {
    evt.preventDefault()

    const validate = validateLink(link)
    if (!validate) {
      return
    }
    console.log({ link })
    setError('')
    setLoading(true)

    youtubeService
      .search({ link })
      .then((response) => {
        console.log({ response })
        setData(response)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="App">
      <Route path="/">
        <Home
          data={data}
          link={link}
          error={error}
          loading={loading}
          handleChange={handleSearchChange}
          handleSubmit={handleSearchSubmit}
        />
      </Route>
    </div>
  )
}

export default App
