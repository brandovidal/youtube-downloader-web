// Components
import Button from '../Button'

import style from './style.module.css'

function Search({ link, error, handleChange, handleSubmit }) {
  return (
    <section className={style.Search}>
      <h3>Convertidor y descargador de YouTube a MP3/MP4.</h3>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <input
            type="text"
            name="link"
            className={style.formControl}
            placeholder="Pegue el enlace de Youtube"
            autoComplete="off"
            value={link}
            onChange={handleChange}
          />
          {error && <p className={style.error}>{error}</p>}
        </div>
        <div className={style.formGroup}>
          <Button type="submit" icon='play' defaultText="Convertir" />
        </div>
      </form>
    </section>
  )
}

export default Search
