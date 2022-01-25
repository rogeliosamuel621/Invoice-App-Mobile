import { useState } from 'react'
import useAppDispatch from '../../../common/hooks/useAppDispatch'
import { setStatusFilter } from '../../../common/state/invoices-status.slice'

export const useCheckFilterMenuItem = () => {
  const dispatch = useAppDispatch()
  const [isDraftFilterActive, setIsDraftFilterActive] = useState(false)
  const [isPendingFilterActive, setIsPendingFilterActive] = useState(false)
  const [isPaidFilterActive, setIsPaidFilterActive] = useState(false)

  const clear = () => {
    setIsDraftFilterActive(false)
    setIsPaidFilterActive(false)
    setIsPendingFilterActive(false)
    dispatch(setStatusFilter(''))
  }

  const activateDraftFilter = () => {
    clear()
    const isChecked = isDraftFilterActive
    setIsDraftFilterActive(!isChecked)
    dispatch(setStatusFilter(isChecked ? '' : 'draft'))
  }
  const activatePendingFilter = () => {
    clear()
    const isChecked = isPendingFilterActive
    setIsPendingFilterActive(isPendingFilterActive ? false : true)
    dispatch(setStatusFilter(isChecked ? '' : 'pending'))
  }
  const activatePaidFilter = () => {
    clear()
    const isChecked = isPaidFilterActive
    setIsPaidFilterActive(isPaidFilterActive ? false : true)
    dispatch(setStatusFilter(isChecked ? '' : 'paid'))
  }

  return {
    activateDraftFilter,
    activatePendingFilter,
    activatePaidFilter,
    isDraftFilterActive,
    isPendingFilterActive,
    isPaidFilterActive
  }
}
