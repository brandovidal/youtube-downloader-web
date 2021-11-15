import axios from 'axios'

const baseUrl = 'https://dracon-youtube-downloader-api.herokuapp.com/v1/api/youtube'
// const baseUrl = 'http://localhost:8000/v1/api/youtube'

const search = ({ link }) => {
  const request = axios.post(`${baseUrl}/search`, { link })
  return request.then((response) => response.data)
}

const convert = ({ itag, link }) => {
  const request = axios.post(`${baseUrl}/convert`, { itag, link })
  return request.then((response) => response)
}

export default { search, convert }
