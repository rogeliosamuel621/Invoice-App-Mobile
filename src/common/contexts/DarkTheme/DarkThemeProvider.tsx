import { createContext, FC, useContext, useState } from 'react'
import { Appearance } from 'react-native'

export const DarkThemeContext = createContext({
  isDarkMode: true,
  setIsDarkMode: (value: boolean) => {}
})

export const DarkThemeProvider: FC = ({ children }) => {
  const isUserPreferencesDark = Appearance.getColorScheme() === 'dark'
  const [isDarkMode, setIsDarkMode] = useState(isUserPreferencesDark)

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  )
}

export const useDarkThemeContext = () => useContext(DarkThemeContext)
