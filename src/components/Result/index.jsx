import style from './style.module.css'

// Components
import Info from '../Info'
import ListOfConvert from '../ListOfConvert'

function Result({ data, link }) {
  return (
    data && (
      <section className={style.Result}>
        <article className={style.streams}>
          <h3>Formatos de descarga:</h3>
          <small>Pulse el boton Generar para obtener el formato de descarga seleccionado.</small>
          <ListOfConvert streams={data.audios} title="Audio" link={link} />
          <ListOfConvert streams={data.videos} title="Videos" link={link} />
        </article>
        <article>
          <Info data={data} />
        </article>
      </section>
    )
  )
}

export default Result
