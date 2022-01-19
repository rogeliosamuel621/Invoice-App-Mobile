import { useState } from 'react'

export const useCheckFilterMenuItem = () => {
  const [isDraftFilterActive, setIsDraftFilterActive] = useState(false)
  const [isPendingFilterActive, setIsPendingFilterActive] = useState(false)
  const [isPaidFilterActive, setIsPaidFilterActive] = useState(false)

  const clear = () => {
    setIsDraftFilterActive(false)
    setIsPaidFilterActive(false)
    setIsPendingFilterActive(false)
  }

  const activateDraftFilter = () => {
    clear()
    setIsDraftFilterActive(true)
  }
  const activatePendingFilter = () => {
    clear()
    setIsPendingFilterActive(true)
  }
  const activatePaidFilter = () => {
    clear()
    setIsPaidFilterActive(true)
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
