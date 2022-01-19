export const TEXT_INVOICE_TYPES = {
  ['paid']: 'Paid',
  ['pending']: 'Pending',
  ['draft']: 'Draft'
}

export const getTextFromInvoiceType = (text: 'paid' | 'pending' | 'draft') =>
  TEXT_INVOICE_TYPES[text]
