import { useState } from 'react'

import classNames from 'classnames'
import style from './style.module.css'

const Button = ({ handleClickButton, icon, activeState = false, activeText = 'Descargado', defaultText }) => {
  const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false)

  const handleClick = () => {
    setLoading(true)

    handleClickButton()

    setTimeout(() => {
      setLoading(false)
      setActive(true)
    }, 1500)
  }

  const textButton = active && activeState ? activeText : defaultText
  const classNameButton = active && activeState ? style.secondary : style.primary

  return (
    <button
      type="button"
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
