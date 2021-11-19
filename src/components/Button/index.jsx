import classNames from 'classnames'
import style from './style.module.css'

const NO_OP = () => {}

const Button = ({
  type = 'button',
  handleClick = NO_OP,
  icon = '',
  loading = false,
  active = false,
  activeText = '',
  className = 'primary',
  defaultText,
}) => {
  const textButton = active ? activeText : defaultText
  const classNameButton = className !== null ? style[className] : style.primary

  return (
    <button
      type={type}
      className={classNames(style.Button, classNameButton)}
      onClick={handleClick}
      disabled={loading ? 'disabled' : ''}
    >
      {loading ? (
        <div className={style.loading}></div>
      ) : active || !icon ? (
        ''
      ) : (
        <img src={`/svg/${icon}.svg`} alt={textButton} />
      )}
      <span>{textButton}</span>
    </button>
  )
}

export default Button
