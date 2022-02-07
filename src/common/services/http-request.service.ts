import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios'
import { apiDomain } from '../constants/env.constants'
import { TRequestOptions } from '../interfaces/services/http-request.interface'

export default class HttpRequest {
  private apiDomain: string
  private endpoint: string
  private headers: AxiosRequestHeaders

  constructor() {
    this.endpoint = ''
    this.apiDomain = apiDomain
    this.headers = {
      'Content-Type': 'application/json'
    }
  }

  protected configRequest(config: TRequestOptions) {
    this.endpoint = config.endpoint
    this.apiDomain = config.apiDomain || this.apiDomain
    this.headers = {
      ...this.headers,
      ...config.headers
    }
  }

  protected async get<T>(): Promise<AxiosResponse<T>> {
    try {
      return await axios.get(this.urlBuilder(), { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async post<T>(data: unknown): Promise<AxiosResponse<T>> {
    try {
      return await axios.post(this.urlBuilder(), data, { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async put<T>(data: unknown): Promise<AxiosResponse<T>> {
    try {
      return await axios.put(this.urlBuilder(), data, { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  protected async delete<T>(): Promise<AxiosResponse<T>> {
    try {
      return await axios.delete(this.urlBuilder(), { headers: this.headers })
    } catch (error) {
      if (!axios.isAxiosError(error)) {
        throw new Error('An error has ocurred')
      }

      return error.response as AxiosResponse
    }
  }

  private urlBuilder(): string {
    return `${this.apiDomain}/${this.endpoint}`
  }
}
