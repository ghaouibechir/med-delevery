import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import Navbar from "./screens/Navbar";
import Localisation from "./screens/Localisation";
import Cart from "./screens/Cart";
import React, { useState, useEffect } from 'react'
import RegisterScreen from "./screens/RegisterScreen";
import Login from "./screens/SigninScreen";
import LandingPage from "./screens/LandingPage";
import Footer from "./screens/Footer";
import NotificationScreen from "./screens/Notification";
import ReminderScreen from "./screens/Reminder"
import ProfileScreen from "./screens/Profile"
import VerificationScreen from "./screens/Verification";
import AboutScreen from "./screens/About";
import Apploading from 'expo-app-loading';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./screens/CredentialsContext";
import EditProfile from './screens/editProfile';
import CameraScreen from './screens/camera'
import Paiment from "./screens/Paiment";
const Stack = createNativeStackNavigator();




export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [stored, setStored] = useState('');

  const checkLogin = () => {
    AsyncStorage.getItem('key').then((res) => {
      if (res !== null) {
        setStored(JSON.parse(res))
      } else {
        setStored(null)
      }

    }).catch(error => console.log(error))
  }
  if (!appReady) {
    return (
      <Apploading
        startAsync={checkLogin}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <CredentialsContext.Provider value={{ stored, setStored }}>
      <CredentialsContext.Consumer>
        {({ stored }) => (
          <NavigationContainer>
            <Stack.Navigator>
              {
                stored ?
                  <>
                    <Stack.Screen
                      name="navbar"
                      component={Navbar}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="localisation"
                      component={Localisation}
                      options={{ headerShown: true }}
                    />
                    <Stack.Screen
                      name="cart"
                      component={Cart}
                      options={{ headerShown: true }}
                    />
                    <Stack.Screen
                      name="Notification"
                      component={NotificationScreen}
                      options={{ headerShown: true }}
                    />
                    <Stack.Screen
                      name="Reminder"
                      component={ReminderScreen}
                      options={{ headerShown: true }}
                    />
                    <Stack.Screen
                      name="About"
                      component={AboutScreen}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="Profile"
                      component={ProfileScreen}
                      options={{ headerShown: false }}
                    />
                     <Stack.Screen
                      name="Paiment"
                      component={Paiment}
                      options={{ headerShown: true }}
                    />
                    <Stack.Screen
                      name="Camera"
                      component={CameraScreen}
                      options={{ headerShown: true }}
                    />
                  </>
                  :
                  <><Stack.Screen
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
                      name="verification"
                      component={VerificationScreen}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="login"
                      component={Login}
                      options={{ headerShown: false }}
                    /></>
              }
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </CredentialsContext.Consumer>
    </CredentialsContext.Provider>

  );
}
