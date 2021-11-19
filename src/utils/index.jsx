const NO_OP = () => {}

const validateLink = ({ link, setError }) => {
  const emptyStringError = 'Se necesita un enlace de Youtube'

  if (link === null || link === undefined) {
    setError(emptyStringError)
    return false
  }

  if (link.length === 0) {
    setError(emptyStringError)
    return false
  }

  if (!(link.startsWith('https://www.youtube.com') || link.startsWith('https://youtu.be'))) {
    setError('Pegue un enlace válido de Youtube')
    return false
  }

  setError('')
  return true
}

export { NO_OP, validateLink }
