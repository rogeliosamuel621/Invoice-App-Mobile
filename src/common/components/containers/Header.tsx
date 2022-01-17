import { StyleSheet, View } from 'react-native'
import { Logo } from '../atoms/Logo'
import { ToggleTheme } from '../atoms/ToggleTheme'

export const Header = () => {
  return (
    <View style={style.header}>
      <Logo />
      <ToggleTheme />
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E2139',
    paddingRight: 20,
    marginTop: 20
  }
})
