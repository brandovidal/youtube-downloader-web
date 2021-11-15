// Services
import { useState } from 'react'

// Services
import youtubeService from '../../services/youtube'

// Components
import Badge from '../Badge'
import Button from '../Button'

import style from './style.module.css'

const Convert = ({ itag, format = 'MP3', filesize = '', res, link }) => {
  const [loading, setLoading] = useState(false)
  const [converted, setConverted] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [url, setUrl] = useState('')

  const handleConvert = () => {
    setLoading(true)
    const body = { itag, link }

    youtubeService
      .convert(body)
      .then((response) => {
        if (response === null) {
          setLoading(false)
          return
        }
        console.log('Converting.. ')
        const data = response.data

        const { url } = data
        console.log({ url })
        setUrl(url)

        setLoading(false)
        setConverted(true)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const handleDownload = () => {
    setLoading(true)

    console.log({ url })
    window.open(url, '_blank')

    setTimeout(() => {
      setLoading(false)
      setDownloaded(true)
    }, 1500)
  }

  const textButton = loading ? 'Generando...' : converted ? 'Generado' : 'Generar'
  const classNameButton = converted ? 'secondary' : 'primary'
  const typeButton = format === 'MP3' ? 'secondary' : 'primary'

  return (
    <div className={style.Convert}>
      <div className="item">
        <Badge text={format} type={typeButton}></Badge>
      </div>
      <div className="item">
        <p className="res">{res}</p>
      </div>
      <div className="item">
        <p className="filesize">{filesize}</p>
      </div>
      <div className="item">
        {converted ? (
          <Button
            type="button"
            icon="download"
            activeState="true"
            active={downloaded}
            activeText="Descargado"
            defaultText="Descargar"
            loading={loading}
            handleClick={handleDownload}
          />
        ) : (
          <Button
            type="button"
            icon="sync"
            className={classNameButton}
            defaultText={textButton}
            loading={loading}
            handleClick={handleConvert}
          />
        )}
      </div>
    </div>
  )
}

export default Convert
