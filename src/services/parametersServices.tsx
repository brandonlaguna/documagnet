import { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL } from '../configs/constants'
import { StandardResponse } from '../store/app/types/response/response'
import { instance } from '../configs/instances'
import { ITiposPersonasResponse } from '../store/app/types/response/ITiposPersonasResponse'

instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.baseURL = API_URL
    return config
  },
  function (error: any) {
    return Promise.reject(error)
  }
)

const GET_ALL_TIPOS_PERSONAS = '/tipos_personas'

export const getAllTiposPersonas = async (): Promise<StandardResponse<ITiposPersonasResponse[]>> => {
  const response: AxiosResponse<StandardResponse<ITiposPersonasResponse[]>> = await instance.get(
    GET_ALL_TIPOS_PERSONAS,
  )

  return response.data
}
