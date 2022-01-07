import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./screens/Navbar";
import Localisation from "./screens/Localisation";
import Cart from "./screens/Cart";
import RegisterScreen from "./screens/RegisterScreen";
import Login from "./screens/SigninScreen";
import LandingPage from "./screens/LandingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registerScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="navbar"
          component={Navbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="localisation"
          component={Localisation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
