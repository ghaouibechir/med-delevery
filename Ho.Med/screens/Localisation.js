import * as React from "react";

import {
  SafeAreaView,
  Picker,
  View,
  Animated,
  Text,
  Button,
  BackHandler,

  StyleSheet,

} from "react-native";
import { Colors, Sizes } from "../constant/styles";
import Footer from "./Footer";
import { WebView } from "react-native-webview";
import * as Location from 'expo-location';
const MAP =
  "https://www.google.com/maps/search/pharmacie+a+proximit%C3%A9/@36.8942714,10.1870812,16z";
export default function NotificationScreen() {
  const { errorMsg, setErrorMsg } = React.useState('')
  const [longitude, setLongitude] = React.useState('')
  const [latitude, setLatitude] = React.useState('')
  const [selectedValue, setSelectedValue] = React.useState("java");
  React.useEffect(() => {
    (
      Location.requestForegroundPermissionsAsync().then(({ status }) => {
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
      }).catch(() => { }).then(() => {
        Location.getCurrentPositionAsync({}).catch(() => { }).then((location) => {
          setLongitude(location.coords.longitude);
          setLatitude(location.coords.latitude);
        })                                          
      }).catch(err => { console.log(err) })
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <View style={{ width: 420, height: 740 }}>
        <WebView source={{ uri: MAP }} onLoad={console.log("Loaded!")} />
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue)
         console.log(selectedValue)}
      }
      >
        <Picker.Item label="Ariana" value="Ariana" />
        <Picker.Item label="Beja" value="Beja" />
        <Picker.Item label="Ben Arous" value="Ben Arous" />
        <Picker.Item label="Bizerte" value="Bizerte" />
        <Picker.Item label="Gabes" value="Gabes" />
        <Picker.Item label="Gafsa" value="Gafsa" />
        <Picker.Item label="Jendouba" value="Jendouba" />
        <Picker.Item label="Kairouan" value="Kairouan" />
        <Picker.Item label="Kasserine" value="Kasserine" />
        <Picker.Item label="Kebili" value="Kebili" />
        <Picker.Item label="Kef" value="Kef" />
        <Picker.Item label="Mahdia" value="Mahdia" />
        <Picker.Item label="Manouba" value="Manouba" />
        <Picker.Item label="Medenine" value="Medenine" />
        <Picker.Item label="Monastir" value="Monastir" />
        <Picker.Item label="Nabeul" value="Nabeul" />
        <Picker.Item label="Sfax" value="Sfax" />
        <Picker.Item label="Sidi Bouzid" value="Sidi Bouzid" />
        <Picker.Item label="Siliana" value="Siliana" />
        <Picker.Item label="Sousse" value="Sousse" />
        <Picker.Item label="Tataouine" value="Tataouine" />
        <Picker.Item label="Tozeur" value="Tozeur" />
        <Picker.Item label="Tunis" value="Tunis" />
        <Picker.Item label="Zaghouan" value="Zaghouan" />
      </Picker>
        <Footer />
      </View>

      <View style={{ marginTop: 420, width: 100 }}>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerInfoWrapStyle: {
    flexDirection: "row",
    paddingLeft: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartItemCountWrapStyle: {
    position: "absolute",
    right: -8.0,
    height: 17.0,
    width: 17.0,
    borderRadius: 8.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.redColor,
    elevation: 10.0,
  },
  searchButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding + 1.0,
    marginTop: Sizes.fixPadding + 5.0,
  },
});