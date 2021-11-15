import React, { useState } from 'react'
import { useLocation } from 'wouter'

import style from './style.module.css'

function Search() {
  const [link, setLink] = useState('')
  const [error, setError] = useState('')
  const [, setLocation] = useLocation()

  const handleChange = (evt) => setLink(evt.target.value)

  const validateLink = (link) => {
    if (link.length === 0) {
      return false
    }

    if (!(link.startsWith('https://www.youtube.com') || link.startsWith('https://youtu.be'))) {
      return false
    }
    return true
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    const validate = validateLink(link)
    console.log({ validate })
    if (!validate) {
      setError('Ingrese una URL válida')
      return
    }
    console.log({ link })
    setError('')
    setLocation(`/convert?link=${link}`)
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
          <button type="submit" className="btn">
            <img src="/svg/play.svg" alt="Convert" />
            <span>Convertir</span>
          </button>
        </div>
      </form>
    </section>
  )
}

export default Search
