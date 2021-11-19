import React from 'react'

import { useLocation } from 'wouter'
import Button from '../Button'

import style from './style.module.css'

function NotFound({
  textError = 'La página que estas buscando fue removida o no esta temporalmente disponible',
  textButton = 'Ir al inicio',
  route = '/',
}) {
  const [location, setLocation] = useLocation()

  const handleClick = () => {
    setLocation(route)
  }

  return (
    <section className={style.NotFound}>
      <picture className={style.icon}>
        <img src="/svg/alien.svg" alt="Image Alien Error 404" />
      </picture>
      <h1 className={style.title}>404</h1>
      <p className={style.subtitle}>{textError}</p>
      <Button icon="" defaultText={textButton} className="dark" handleClick={handleClick} />
    </section>
  )
}

export default NotFound
