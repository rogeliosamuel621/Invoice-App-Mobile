import { IInvoice } from '../interfaces/invoice.interface'
import { InvoicesService } from '../services/invoices.service'

const invoiceService = new InvoicesService()

export const fetchInvoices = (): Promise<IInvoice[] | never[]> => {
  const invoices = invoiceService.getAllInvoices()

  return invoices || []
}
