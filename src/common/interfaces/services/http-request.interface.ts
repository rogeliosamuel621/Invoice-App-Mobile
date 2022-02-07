import { AxiosRequestHeaders } from 'axios'

export type TRequestOptions = {
  endpoint: string
  apiDomain?: string
  headers?: AxiosRequestHeaders
}
