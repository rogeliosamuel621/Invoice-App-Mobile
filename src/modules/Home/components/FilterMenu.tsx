import { StyleSheet, View } from 'react-native'
import { colors } from '../../../common/constants/colors'
import { useDarkThemeContext } from '../../../common/contexts/DarkTheme/DarkThemeProvider'
import { useCheckFilterMenuItem } from '../hooks/useCheckFilterMenuItem'
import { FilterMenuItem } from './FilterMenuItem'

export const FilterMenu = () => {
  const { isDarkMode } = useDarkThemeContext()
  const {
    activateDraftFilter,
    activatePaidFilter,
    activatePendingFilter,
    isDraftFilterActive,
    isPaidFilterActive,
    isPendingFilterActive
  } = useCheckFilterMenuItem()

  return (
    <View style={darkThemeStyles(isDarkMode).filterMenu}>
      <FilterMenuItem text="draft" isChecked={isDraftFilterActive} onPress={activateDraftFilter} />
      <FilterMenuItem
        text="pending"
        isChecked={isPendingFilterActive}
        onPress={activatePendingFilter}
      />
      <FilterMenuItem text="paid" isChecked={isPaidFilterActive} onPress={activatePaidFilter} />
    </View>
  )
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    filterMenu: {
      backgroundColor: d ? colors.secondaryDark : '#FFF',
      position: 'absolute',
      top: 40,
      right: 0,
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 8
    }
  })
}
