import { useEffect, useState } from 'react'
import { useSearchParam } from 'react-use'

import { validateLink } from '../../utils'

import youtubeService from '../../services/youtube'

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Result from '../../components/Result'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'

const Convert = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const link = useSearchParam('link')

  const handleFetch = () => {
    const validationError = 'No se encontraron formatos de la busqueda'

    const validate = validateLink({ link, setError })
    if (!validate) {
      setError(validationError)
      setLoading(false)
      return
    }

    setError('')
    youtubeService
      .search({ link })
      .then((response) => {
        console.log({ response })
        setData(response)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(validationError)
        setLoading(false)
      })
  }

  useEffect(handleFetch, [link])

  return (
    <>
      <Header />
      {loading === true ? (
        <Loading message="Buscando formatos" />
      ) : data !== '' ? (
        <Result data={data} link={link} />
      ) : (
        <NotFound textError={error} />
      )}
      <Footer />
    </>
  )
}

export default Convert
