import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './invoices.slice'

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer
  }
})
