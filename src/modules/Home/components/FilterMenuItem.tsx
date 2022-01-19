import { FC } from 'react'
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'
import { getTextFromInvoiceType } from '../../../common/helpers/invoices'
import { TInvoiceStatus } from '../../../common/interfaces/invoice.interface'

export const FilterMenuItem: FC<Props> = ({ isChecked, text, onPress }) => {
  const { isDarkMode } = useDarkThemeContext()
  const invoiceType = getTextFromInvoiceType(text)
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={darkThemeStyles(isDarkMode).filterMenuItem}>
        {isChecked ? (
          <View style={darkThemeStyles(isDarkMode).checkedBox}>
            <Image
              source={require('../../../../assets/check.png')}
              style={{ width: 7.47, height: 5.35 }}
            />
          </View>
        ) : (
          <View style={darkThemeStyles(isDarkMode).emptyBox}></View>
        )}
        <Text style={darkThemeStyles(isDarkMode).text}>{invoiceType}</Text>
      </View>
    </TouchableHighlight>
  )
}

type Props = {
  isChecked?: boolean
  text: TInvoiceStatus
  onPress: (e?: GestureResponderEvent) => void
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    filterMenuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15
    },
    emptyBox: {
      width: 16,
      height: 16,
      backgroundColor: d ? colors.primaryDark : colors.secondaryGray,
      marginRight: 13,
      borderRadius: 2
    },
    checkedBox: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primaryPurple,
      width: 16,
      height: 16,
      marginRight: 13,
      borderRadius: 2
    },
    text: {
      color: d ? '#FFF' : colors.primaryBlue,
      fontWeight: '700'
    }
  })
}
