import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'

export const FilterDropButton = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).filterDropButton}>
      <Text style={darkThemeStyles(isDarkMode).filterText}>Filter</Text>
      <Image source={require('../../../../assets/drop.png')} style={{ width: 8, height: 8 }} />
    </View>
  )
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    filterDropButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 18
    },
    filterText: {
      color: d ? '#FFF' : colors.primaryBlue,
      paddingRight: 12,
      fontWeight: '700'
    }
  })
}
