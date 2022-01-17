import { createContext, useContext, useState } from 'react'

export const DarkThemeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: (value: boolean) => {}
})

export const DarkThemeProvider = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}></DarkThemeContext.Provider>
  )
}

export const useDarkThemeContext = () => useContext(DarkThemeContext)
