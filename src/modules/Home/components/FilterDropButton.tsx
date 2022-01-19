import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'

export const FilterDropButton = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).filterDropButton}>
      <Text style={darkThemeStyles(isDarkMode).filterText}>Filter</Text>
      <Image source={require('../../../../assets/drop.png')} />
    </View>
  )
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    filterDropButton: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    filterText: {
      color: d ? '#FFF' : colors.primaryBlue,
      paddingRight: 12
    }
  })
}
