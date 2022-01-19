import { TInvoiceStatus } from '../interfaces/invoice.interface'

export const TEXT_INVOICE_TYPES = {
  ['paid']: 'Paid',
  ['pending']: 'Pending',
  ['draft']: 'Draft'
}

export const getTextFromInvoiceType = (text: TInvoiceStatus) => TEXT_INVOICE_TYPES[text]
