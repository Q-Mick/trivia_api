// @ts-ignore
export const hpApi = axios.create({
  baseURL: 'https://opentdb.com/',
  timeout: 8000,
  withCredentials: false
})


hpApi.interceptors.request.use(config => config, handleAxiosError)
hpApi.interceptors.response.use(response => response, handleAxiosError)


function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    console.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}