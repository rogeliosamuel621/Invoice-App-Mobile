import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../common/components/containers/Header'
import { colors } from '../common/constants/colors'
import { useDarkThemeContext } from '../common/contexts/DarkTheme/DarkThemeProvider'

export const HomeScreen = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).home}>
      <Header />
    </View>
  )
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    home: {
      backgroundColor: d ? colors.dark : colors.light,
      height: '100%'
    }
  })
}
