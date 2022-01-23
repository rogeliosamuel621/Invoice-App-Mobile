import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './invoices.slice'
import invoicesReducer from './invoices-status.slice'

export const store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    invoicesStatus: invoicesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
