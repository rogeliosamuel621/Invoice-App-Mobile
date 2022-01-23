import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInvoiceStatus } from '../interfaces/invoice.interface'

export type TInvoiceStatusState = TInvoiceStatus

const initialState = ''

export const invoicesStatusSlice = createSlice({
  name: 'invoices-status',
  initialState: {
    status: initialState
  },
  reducers: {
    setStatusFilter: (_, action: PayloadAction<TInvoiceStatusState>) => {
      return {
        status: action.payload
      }
    },
    getStatusFilter: (state, _) => {
      return state
    }
  }
})

export const { setStatusFilter, getStatusFilter } = invoicesStatusSlice.actions

export default invoicesStatusSlice.reducer
