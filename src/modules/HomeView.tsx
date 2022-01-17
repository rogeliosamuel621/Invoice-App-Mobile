import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../common/components/containers/Header'

export const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#141625',
    height: '100%'
  }
})
