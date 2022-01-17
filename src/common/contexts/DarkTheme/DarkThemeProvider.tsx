import { createContext, FC, useContext, useState } from 'react'

export const DarkThemeContext = createContext({
  isDarkMode: true,
  setIsDarkMode: (value: boolean) => {}
})

export const DarkThemeProvider: FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  )
}

export const useDarkThemeContext = () => useContext(DarkThemeContext)
