import style from './style.module.css'

const Info = ({ data }) => {
  return (
    <div className={style.Info}>
      <picture>
        <img src={data.thumbnail_url} alt={data.title} />
      </picture>
      <h4>{data.author}</h4>
      <p>{data.title}</p>
      <p>{data.time}</p>
    </div>
  )
}

export default Info
