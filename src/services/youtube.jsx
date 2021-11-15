import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL
const api = `${baseUrl}/youtube`

const search = ({ link }) => {
  const request = axios.post(`${api}/search`, { link })
  return request.then((response) => response.data)
}

const convert = ({ itag, link }) => {
  const request = axios.post(`${api}/convert`, { itag, link })
  return request.then((response) => response)
}

export default { search, convert }
