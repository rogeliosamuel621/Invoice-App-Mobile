import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInvoice } from '../interfaces/invoice.interface'

export type TInvoiceState = IInvoice

const initialState: TInvoiceState[] = []

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    invoices: initialState,
    numOfInvoices: initialState.length
  },
  reducers: {
    setInvoicesData: (state, action: PayloadAction<TInvoiceState[]>) => {
      return {
        ...state,
        invoices: action.payload
      }
    },
    getInvoicesData: (state) => state
  }
})

export const { getInvoicesData, setInvoicesData } = invoiceSlice.actions

export default invoiceSlice.reducer
