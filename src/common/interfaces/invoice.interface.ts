export interface IInvoice {
  id: string
  address: {
    street: string
    city: string
    postcode: string
    country: string
  }
  customer: {
    name: string
    email: string
    address: {
      street: string
      city: string
      postcode: string
      country: string
    }
  }
  date: Date
  terms: string
  description: string
  items: [
    {
      id: string
      name: string
      quantity: number
      price: number
      total: number
    }
  ]
  status: TInvoiceStatus
  total: number
}

export type TInvoiceStatus = 'paid' | 'pending' | 'draft' | ''
