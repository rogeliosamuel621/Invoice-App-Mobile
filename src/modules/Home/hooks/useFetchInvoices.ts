import { useEffect } from 'react'
import { fetchInvoices } from '../../../common/api/invoices.api'
import useAppDispatch from '../../../common/hooks/useAppDispatch'
import { useFetch } from '../../../common/hooks/useFetch'
import { IInvoice } from '../../../common/interfaces/invoice.interface'
import { setInvoicesData } from '../../../common/state/invoices.slice'

export const useFetchInvoices = () => {
  const dispatch = useAppDispatch()
  const { data, isLoading } = useFetch<IInvoice[] | never>(fetchInvoices)

  useEffect(() => {
    if (!data) return

    dispatch(setInvoicesData(data))
  }, [data])

  return {
    invoices: data,
    isLoading
  }
}
