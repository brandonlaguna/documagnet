import { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { API_URL } from '../configs/constants'
import { StandardResponse } from '../store/app/types/response/response'
import { ICheckEmailVerified, IValidateToken } from '../store/app/types/response/IAuthResponse'
import { instance } from '../configs/instances'

instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.baseURL = `http://${API_URL}/`

    return config
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error)
  }
)

const VALIDATE_TOKEN = '/verify_token'
const CHECK_EMAIL_VERIFIED = '/checkEmailVerified'


export const validateTokenService = async (guard: string): Promise<StandardResponse<IValidateToken>> => {
  const response: AxiosResponse<StandardResponse<IValidateToken>> = await instance.post(
    VALIDATE_TOKEN,
    { guard },
  )

  return response.data
}

export const checkEmailVerified = async (guard: string): Promise<StandardResponse<ICheckEmailVerified>> => {
  const response: AxiosResponse<StandardResponse<ICheckEmailVerified>> = await instance.post(
    CHECK_EMAIL_VERIFIED,
    { guard },
  )

  return response.data
}
