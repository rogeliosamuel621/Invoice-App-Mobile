import { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'
import { getTextFromInvoiceType } from '../../../common/helpers/invoices'

export const FilterMenuItem: FC<Props> = ({ isChecked, text }) => {
  const { isDarkMode } = useDarkThemeContext()
  const invoiceType = getTextFromInvoiceType(text)
  return (
    <View style={darkThemeStyles(isDarkMode).filterMenuItem}>
      {isChecked ? (
        <View>
          <Image
            source={require('../../../../assets/check.png')}
            style={{ width: 7.47, height: 5.35 }}
          />
        </View>
      ) : (
        <View></View>
      )}
      <Text>{invoiceType}</Text>
    </View>
  )
}

type Props = {
  isChecked: boolean
  text: 'paid' | 'pending' | 'draft'
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    filterMenuItem: {}
  })
}
