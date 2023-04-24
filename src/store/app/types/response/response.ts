export interface StandardResponse<T> {
  statusCode: number
  statusMessage: string
  result?: T
}

export interface ListBasicResponse<T> {
  informationCode: string
  information: string
  count: number
  records: Array<T>
}

export interface ITenantResponse<T> {
  tenant: T
}
