import classNames from 'classnames'

import style from './style.module.css'

const Badge = ({ text = '', type = 'primary' }) => {
  const classNameButton = type === 'primary' ? style.primary : style.secondary

  return (
    <div className={classNames(style.Badge, classNameButton)}>
      <label className="content">{text}</label>
    </div>
  )
}

export default Badge
