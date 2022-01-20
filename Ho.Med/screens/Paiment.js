import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stripee from "./Stripee"

import { StripeProvider } from "@stripe/stripe-react-native";
export default function Paiment({ navigation}) {
  return (
   
    <StripeProvider publishableKey="pk_test_51KAJlaHCkVRXX2YEoKKBzheHwz5wxxcDYyhXdmcFlGJgSQIkAn9OPSeHBQQNgUSlsU2hOG8HKRDzdy4L0lkAqBez00aqJr5abu">
     <Stripee/>
  </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
