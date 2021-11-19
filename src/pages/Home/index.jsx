import { useState } from 'react'
import { useLocation } from 'wouter'

// Utils
import { validateLink } from '../../utils'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Search from '../../components/Search'

const Home = () => {
  const [link, setLink] = useState('')
  const [error, setError] = useState('')

  const [location, setLocation] = useLocation()

  // Events
  const handleChange = (evt) => setLink(evt.target.value)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const validate = validateLink({ link, setError })
    if (!validate) {
      return
    }
    setLocation(`/convert?link=${link}`)
  }

  return (
    <>
      <Header />
      <Search link={link} error={error} handleChange={handleChange} handleSubmit={handleSubmit} />
      <Footer />
    </>
  )
}

export default Home
