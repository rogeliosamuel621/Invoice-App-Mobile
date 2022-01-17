import { Image, TouchableHighlight, View } from 'react-native'
import { useDarkThemeContext } from '../../contexts/DarkTheme/DarkThemeProvider'

export const ToggleTheme = () => {
  const { setIsDarkMode, isDarkMode } = useDarkThemeContext()
  return (
    <View>
      <TouchableHighlight onPress={() => setIsDarkMode(!isDarkMode)}>
        <Image
          source={require('../../../../assets/toggle-dark.png')}
          style={{ width: 20, height: 20 }}
        />
      </TouchableHighlight>
    </View>
  )
}
