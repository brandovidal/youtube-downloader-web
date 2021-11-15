import style from './style.module.css'

const Loading = ({ message = '' }) => {
  return (
    <div className={style.Loading}>
      <div className={style.Ripple}>
        <div className={style.rippleItem}></div>
        <div className={style.rippleItem}></div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Loading
