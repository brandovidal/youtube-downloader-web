import style from './style.module.css'

const Loading = ({ message = '' }) => {
  return (
    <div className={style.Loading}>
      <div className={style.icon}></div>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Loading
