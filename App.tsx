import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DarkThemeProvider } from './src/common/contexts/DarkTheme/DarkThemeProvider'
import { HomeScreen } from './src/modules/HomeView'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <DarkThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DarkThemeProvider>
  )
}
