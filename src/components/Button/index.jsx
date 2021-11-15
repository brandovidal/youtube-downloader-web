import { useState } from 'react'

import classNames from 'classnames'
import style from './style.module.css'

const NO_OP = () => {}

const Button = ({
  type = 'button',
  handleClick = NO_OP,
  icon,
  loading=false,
  active=false,
  activeState = false,
  activeText = 'Descargado',
  defaultText,
}) => {
  // const handleClick = () => {
  //   console.log('handleClick')
  //   setLoading(true)

  //   handleClickButton()

  //   setTimeout(() => {
  //     setLoading(false)
  //     setActive(true)
  //   }, 1500)
  // }

  const textButton = active && activeState ? activeText : defaultText
  const classNameButton = active && activeState ? style.secondary : style.primary

  return (
    <button
      type={type}
      className={classNames(style.Button, classNameButton)}
      onClick={handleClick}
      disabled={loading ? 'disabled' : ''}
    >
      {active && activeState ? '' : <img src={`/svg/${icon}.svg`} alt={textButton} />}
      <span>{textButton}</span>
    </button>
  )
}

export default Button
