import * as React from "react";

import {
  SafeAreaView,
  
  View,
 
  StyleSheet,
  
} from "react-native";
import { Colors, Sizes } from "../constant/styles";
import Footer from "./Footer";
import { WebView } from "react-native-webview";
import * as Location from 'expo-location';
const MAP =
  "https://www.google.com/maps/search/pharmacie+a+proximit%C3%A9/@36.8942714,10.1870812,16z";
export default function NotificationScreen() {
  const {errorMsg,setErrorMsg}=React.useState('')
  const [longitude,setLongitude]=React.useState('')
  const [latitude,setLatitude]=React.useState('')
  React.useEffect(() => {
    (
       Location.requestForegroundPermissionsAsync().then(({status})=>{ if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }}).catch(()=>{}).then(()=>{  Location.getCurrentPositionAsync({}).catch(()=>{}).then((location)=>{  setLongitude(location.coords.longitude);
      setLatitude(location.coords.latitude);})
     }).catch(err=>{console.log(err)})
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <View style={{ width: 420, height: 740 }}>
        <WebView source={{ uri: MAP }} onLoad={console.log("Loaded!")} />
      </View>

      <View style={{ marginTop: 420, width: 100 }}>
        <Footer />
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