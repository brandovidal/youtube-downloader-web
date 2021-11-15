import React, { useState } from 'react'

import { useLocation } from 'wouter'

// Services
import youtubeService from '../../services/youtube'

// Components
import Button from '../Button'

import style from './style.module.css'

function Search({ link, handleChange }) {
  const [error, setError] = useState('')
  const [location, setLocation] = useLocation()

  const validateLink = (link) => {
    setError('')
    if (link.length === 0) {
      setError('Ingrese una URL de Youtube')
      return false
    }

    if (!(link.startsWith('https://www.youtube.com') || link.startsWith('https://youtu.be'))) {
      setError('Ingrese una URL válida')
      return false
    }
    return true
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const validate = validateLink(link)
    if (!validate) {
      return
    }
    console.log({ link })
    setError('')

    youtubeService
      .search({ link })
      .then((res) => {
        console.log({ res })
      })
      .catch((err) => console.error(err))

    // setLocation(`/convert?link=${link}`)
  }

  const handleClickButton = () => {
    console.log({ link })
    // window.open(link, '_blank')
  }

  return (
    <section className={style.Search}>
      <h3>Convertidor y descargador de YouTube a MP3/MP4.</h3>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <input
            type="text"
            name="link"
            className={style.formControl}
            placeholder="Pegue el enlace de Youtube"
            autoComplete="off"
            value={link}
            onChange={handleChange}
          />
          {error && <p className={style.error}>{error}</p>}
        </div>
        <div className={style.formGroup}>
          <Button handleClickButton={handleClickButton}  icon={'play'} defaultText='Convertir' />
        </div>
      </form>
    </section>
  )
}

export default Search
