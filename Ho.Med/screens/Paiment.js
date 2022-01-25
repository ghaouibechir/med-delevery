import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Colors, Sizes } from "../constant/styles";

// import Stripee from "./Stripee"
import { WebView } from "react-native-webview";
import axios from 'axios';


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
      {/* <View>
        <Button text="Pay"
          onPress={() => {
            axios.post("https://api.preprod.konnect.network/api/v2/payments/init-payment", {
              "receiverWalletId": "5f7a209aeb3f76490xdfdsvac4a3d1",
              "amount": 10000,
              "token": "TND",
              "firstName": "Bechir",
              "lastName": "Ghaoui",
              "phoneNumber": "29705403",
              "email": "bechir.ghaoui@mail.com",
              "orderId": "1234657",
              "link": "https://api.dev.konnect.network/WSlQUtBF8",
              "webhook": "https://merchant.tech/api/notification_payment",
              "successUrl": "https://dev.konnect.network/gateway/payment-success",
              "failUrl": "https://dev.konnect.network/gateway/payment-failure",
              "acceptedPaymentMethods": [
                "bank_card",
                "wallet",
                "e-DINAR"
              ]
            }).then(({payUrl})=>{
              console.log("page html rendring ",payUrl);
            })
          }}
        />
      </View> */}


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
