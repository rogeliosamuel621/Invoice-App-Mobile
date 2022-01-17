import { StyleSheet, Text, View } from 'react-native'

export const HomeOptions = () => {
  return (
    <View style={styles.homeOptions}>
      <View>
        <Text>Invoices</Text>
        <Text>7 invoices</Text>
      </View>
      <View>
        <Text>Options</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24
  }
})
