import { StyleSheet, Text, View } from 'react-native'
import { PageTitle } from '../../../common/components/atoms/PageTitle'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'
import { FilterDropButton } from './FilterDropButton'

export const HomeOptions = () => {
  const { isDarkMode } = useDarkThemeContext()
  return (
    <View style={darkThemeStyles(isDarkMode).homeOptions}>
      <View>
        <PageTitle title="Invoices" />
        <Text style={darkThemeStyles(isDarkMode).numOfInvoicesSubtitle}>7 invoices</Text>
      </View>
      <View>
        <FilterDropButton />
      </View>
    </View>
  )
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    homeOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      marginTop: 34,
      alignItems: 'center'
    },
    numOfInvoicesSubtitle: {
      color: d ? colors.secondaryGray : colors.primaryGray
    }
  })
}
