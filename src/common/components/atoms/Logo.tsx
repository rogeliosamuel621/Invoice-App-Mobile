import { Image, View } from 'react-native'

export const Logo = () => {
  return (
    <View>
      <Image source={require('../../../../assets/logo.png')} style={{ width: 72, height: 72 }} />
    </View>
  )
}
