import { StyleSheet, View } from 'react-native'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'
import { FilterMenuItem } from './FilterMenuItem'

export const FilterMenu = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).filterMenu}>
      <FilterMenuItem text="draft" isChecked />
      <FilterMenuItem text="pending" />
      <FilterMenuItem text="paid" />
    </View>
  )
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    filterMenu: {
      backgroundColor: d ? colors.secondaryDark : '#FFF',
      position: 'absolute',
      top: 40,
      right: 0,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 8
    }
  })
}
