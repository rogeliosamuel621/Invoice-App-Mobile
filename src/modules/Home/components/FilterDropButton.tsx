import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'
import { FilterMenu } from './FilterMenu'

export const FilterDropButton = () => {
  const { isDarkMode } = useDarkThemeContext()
  const [isOpen, setIsOpen] = useState(false)
  const image = isOpen
    ? require('../../../../assets/up.png')
    : require('../../../../assets/drop.png')

  return (
    <View style={darkThemeStyles(isDarkMode).filterDropButton}>
      <TouchableHighlight onPress={() => setIsOpen(!isOpen)}>
        <View style={darkThemeStyles(isDarkMode).filterDropButton}>
          <Text style={darkThemeStyles(isDarkMode).filterText}>Filter</Text>
          <Image source={image} style={{ width: 8.46, height: 4.23 }} />
        </View>
      </TouchableHighlight>
      {isOpen && <FilterMenu />}
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
