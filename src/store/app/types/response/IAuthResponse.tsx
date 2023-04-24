export interface IValidateToken {
  authorization: ITokenResponse
}

export interface ITokenResponse {
  token: string
  type: string
  expires_in: number
}

export interface ICheckEmailVerified {
  email_verified_at: Date
}