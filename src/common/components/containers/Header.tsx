import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants/colors'
import { useDarkThemeContext } from '../../contexts/DarkTheme/DarkThemeProvider'
import { Logo } from '../atoms/Logo'
import { ToggleTheme } from '../atoms/ToggleTheme'

export const Header = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).header}>
      <Logo />
      <ToggleTheme />
    </View>
  )
}

const darkThemeStyles = (isDarkMode: boolean) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? colors.primaryDark : colors.lightNav,
      paddingRight: 20,
      marginTop: 35
    }
  })
}
