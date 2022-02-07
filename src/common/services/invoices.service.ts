import HttpRequest from './http-request.service'
import { IInvoice } from '../interfaces/invoice.interface'

export class InvoicesService extends HttpRequest {
  async getAllInvoices(): Promise<IInvoice[]> {
    this.configRequest({
      endpoint: 'api/json/invoices'
    })

    const response = await this.get<IInvoice[]>()

    return response.data
  }
}
