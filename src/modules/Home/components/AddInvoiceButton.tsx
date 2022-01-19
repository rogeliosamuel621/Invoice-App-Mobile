import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../common/constants/colors'

export const AddInvoiceButton = () => {
  return (
    <View style={styles.addInvoiceButton}>
      <Image source={require('../../../../assets/add.png')} style={{ width: 32, height: 32 }} />
      <Text style={styles.addInvoiceButtonText}>New</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addInvoiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryPurple,
    borderRadius: 24,
    padding: 6
  },
  addInvoiceButtonText: {
    color: '#FFF',
    marginLeft: 8,
    marginRight: 8,
    fontWeight: '700'
  }
})
