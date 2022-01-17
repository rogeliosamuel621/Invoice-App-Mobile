import { Image, View } from 'react-native'

export const ToggleTheme = () => {
  return (
    <View>
      <Image
        source={require('../../../../assets/toggle-dark.png')}
        style={{ width: 20, height: 20 }}
      />
    </View>
  )
}
