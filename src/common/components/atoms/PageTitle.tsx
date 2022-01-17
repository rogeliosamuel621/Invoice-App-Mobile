import { FC } from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../../constants/colors'
import { useDarkThemeContext } from '../../contexts/DarkTheme/DarkThemeProvider'

export const PageTitle: FC<Props> = ({ title }) => {
  const { isDarkMode } = useDarkThemeContext()
  return <Text style={darkThemeStyles(isDarkMode).pageTitle}>{title}</Text>
}

type Props = {
  title: string
}

const darkThemeStyles = (d: boolean) => {
  return StyleSheet.create({
    pageTitle: {
      color: d ? '#FFF' : colors.primaryBlue,
      fontSize: 20,
      fontWeight: '700'
    }
  })
}
