import axios from 'axios'

const baseUrl = 'http://localhost:8000/v1/api/youtube'

const search = ({ link }) => {
  const request = axios.post(`${baseUrl}/search`, { link })
  return request.then((response) => response.data)
}

export default { search }
