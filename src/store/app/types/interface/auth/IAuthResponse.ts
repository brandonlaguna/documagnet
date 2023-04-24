
export interface IValidateEmail {
  tenant: string
  code: number
  group: string
  email: string
  access_login: string
  error?: string
  message?: string
}

export interface IValidateEmailAndPassword {
  tenant: string
  user: object
  group: string
  authorization: ITokenized
}

interface ITokenized {
  token: string
  type: string
  expiresIn: number
}
