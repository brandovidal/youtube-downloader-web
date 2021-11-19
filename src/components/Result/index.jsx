import { Link } from 'wouter'

import style from './style.module.css'

// Components
import Info from '../Info'
import ListOfConvert from '../ListOfConvert'
function Result({ data, link }) {
  return (
    data && (
      <section className={style.Result}>
        <article className={style.content}>
          <p>¿Desea hacer otra descarga?</p>
          <Link to="/">
            <a className={style.link}>Convertir otro video</a>
          </Link>
        </article>
        <article className={style.content}>
          <div className={style.column}>
            <h3>Formatos de descarga:</h3>
            <small>Pulse el boton Generar para obtener el formato de descarga seleccionado.</small>
            <ListOfConvert streams={data.audios} title="Audio" link={link} />
            <ListOfConvert streams={data.videos} title="Videos" link={link} />
          </div>
          <div className={style.column}>
            <Info data={data} />
          </div>
        </article>
      </section>
    )
  )
}

export default Result
