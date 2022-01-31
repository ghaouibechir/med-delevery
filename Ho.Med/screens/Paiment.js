import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Colors, Sizes } from "../constant/styles";

// import Stripee from "./Stripee"
import { WebView } from "react-native-webview";


// import { StripeProvider } from "@stripe/stripe-react-native";
export default function Paiment({ navigation }) {
  const pay =
  "https://dev2.konnect.network/gateway/pay?payment_ref=613878a7b6cac342ac8f9583";
  return (
    <SafeAreaView >
      <View
      style={{ width: 600, height: 1000 }}
      >
        <WebView source={{ uri: pay }}
        onLoad={console.log("Loaded!")}
        />

      </View>


    </SafeAreaView>


    //   <StripeProvider publishableKey="pk_test_51KAJlaHCkVRXX2YEoKKBzheHwz5wxxcDYyhXdmcFlGJgSQIkAn9OPSeHBQQNgUSlsU2hOG8HKRDzdy4L0lkAqBez00aqJr5abu">
    //    {/* <Stripee/> */}
    // </StripeProvider>
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
