import classNames from 'classnames'
import style from './style.module.css'

const NO_OP = () => {}

const Button = ({
  type = 'button',
  handleClick = NO_OP,
  icon,
  loading = false,
  active = false,
  activeText = '',
  className = 'primary',
  defaultText,
}) => {
  console.log({ className })
  const textButton = active ? activeText : defaultText
  const classNameButton = className !== null ? style[className] : style.primary
  const classNameLoading = loading !== false ? style['loading'] : style['loading']

  return (
    <button
      type={type}
      className={classNames(style.Button, classNameButton)}
      onClick={handleClick}
      disabled={loading ? 'disabled' : ''}
    >
      {/* {<div className={style.loading}></div>} */}
      {loading ? (
        <div className={style.loading}></div>
      ) : active ? (
        ''
      ) : (
        <img src={`/svg/${icon}.svg`} alt={textButton} />
      )}
      <span>{textButton}</span>
    </button>
  )
}

export default Button
