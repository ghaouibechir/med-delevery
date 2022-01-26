import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import LottieView from 'lottie-react-native'
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect ,useState} from 'react';
export default function Aploder({ navigation }) {
 const [id,setId]=useState('')
    useEffect(()=>{
    AsyncStorage.getItem('key')
    .then((d) => { setId(JSON.parse(d).id) })
    .then(()=>{check()})
    // .then(()=>{ axios.get('http://192.168.43.184:5000/check/'+id).then(({data})=>{
    //       if(data[0].pharmacyConfirmation){
    //         Alert.alert("cogratulation", "You order has been accepted successfuly")    
    //           navigation.navigate("Paiment")
    //     }
     
    //   }).catch((err)=>{console.log(err);})})
    .catch(err => console.log(err))
 })

    const check=()=>{
        setInterval(()=>{axios.get('http://192.168.43.184:5000/check/'+id).then(({data})=>{
            console.log(data);
          if(data[0].pharmacyConfirmation){   
              navigation.navigate("Paiment")
        }
      }).catch((err)=>{console.log(err);})},10000)
        
     }
     
    

    return (

        <View style={styles.container}>
            <LottieView source={require('../assets/loading/med.json')} autoPlay />
            <Text>the confirmation takes few minutes</Text>
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
        </View>


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
