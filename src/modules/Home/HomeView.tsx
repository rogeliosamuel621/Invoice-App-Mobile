import { StyleSheet, View } from 'react-native'
import { Header } from '../../common/components/containers/Header'
import { colors } from '../../common/constants/colors'
import { useDarkThemeContext } from '../../common/contexts/DarkTheme/DarkThemeProvider'
import { HomeOptions } from './components/HomeOptions'
import { Invoices } from './components/invoices/Invoices'

export const HomeScreen = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).home}>
      <Header />
      <HomeOptions />
      <Invoices />
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
