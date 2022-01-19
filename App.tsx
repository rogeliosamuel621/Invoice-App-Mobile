import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { DarkThemeProvider } from './src/common/contexts/DarkTheme/DarkThemeProvider'
import { store } from './src/common/state/store'
import { HomeScreen } from './src/modules/Home/HomeView'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <DarkThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </DarkThemeProvider>
    </Provider>
  )
}
