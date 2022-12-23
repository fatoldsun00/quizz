import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VUE_APP_AXIOS_URL,
  headers: {
    'Content-type': 'application/json',
  },
})

export default apiClient
