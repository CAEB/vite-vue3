import axios, { AxiosError } from 'axios'
import { ElMessage } from 'element-plus'
import { error } from 'node:console'

const baseURL = 'https://api.github.com'

const service = axios.create({
  baseURL,
  timeout: 20 * 1000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    Promise.reject(err)
  }
)

service.interceptors.response.use(
  (res) => {
    return res
  },
  (err: AxiosError) => {
    if (err.response && err.response.data) {
      const code = err.response.status
      const msg = err.response.data.message

      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, err.response)
    } else {
      ElMessage.error(`${error}`)
    }

    return Promise.reject(error)
  }
)

export default service
