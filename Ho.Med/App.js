import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './screens/Navbar';
import Localisation from './screens/Localisation';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="navbar" component={Navbar} options={{headerShown: false}} />
        <Stack.Screen name="localisation" component={Localisation} options={{headerShown: false}} />
        <Stack.Screen name="cart" component={Cart} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}