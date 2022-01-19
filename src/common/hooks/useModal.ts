import { useState } from 'react'

/**
 * Hook to manage all the logic for a modal
 * @param initialValue Boolean to manage is its open or close in the first render
 * @returns methods to manage modal state
 */
export const useModal = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const toggleModal = () => setIsOpen(!isOpen)

  return {
    closeModal,
    openModal,
    toggleModal,
    isOpen
  }
}
