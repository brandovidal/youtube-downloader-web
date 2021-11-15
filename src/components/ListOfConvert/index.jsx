// Components
import Convert from '../Convert'

import style from './style.module.css'

function ListOfConvert({ streams, title = 'Video', link }) {
  return (
    <div className={style.ListOfConvert}>
      <h4 className={style.title}>{title}</h4>
      {streams.length > 0 &&
        streams.map(({ itag, format, filesize, type, res }) => (
          <Convert key={itag} itag={itag} format={format} filesize={filesize} type={type} res={res} link={link} />
        ))}
    </div>
  )
}

export default ListOfConvert
