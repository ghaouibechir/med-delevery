import * as React from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import Footer from "./Footer";
import {useState ,useEffect} from "react";
import axios from "axios";

export default function EditProfile({ navigation }) {

  const [user , setUser] = useState({})
  const [userNameEdit , setUserNameEdit] = useState(user.username)
  const [emailEdit , setemailEdit] = useState(user.email)
  const [phoneNumberEdit , setPhoneNumberEdit] = useState(user.phoneNumber)
  const [userId , setUserId] = useState("")

  useEffect(() => {
    AsyncStorage.getItem('key').then((d)=>{setUserId(JSON.parse(d).id)})
    console.log(userId)
  },[])

  useEffect(() => {
    getUser()
  })

  

  const getUser = async () => {
    const id = userId
    try {
      let response = await axios.get("http://192.168.43.23:5000/user/" + id)
      setUser(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const UpdateUser = async () => {
    const id = userId
    const username = userNameEdit
    const email = emailEdit
    const phoneNumber = phoneNumberEdit
    try {
      console.log("user updating...")
      let result = await axios.put("http://192.168.43.23:5000/user/" + id , {username , email , phoneNumber})
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <View
        style={{
          backgroundColor: Colors.primaryColor,
          padding: Sizes.fixPadding,
          flexDirection: "column",
        }}
      >
        <View style={styles.headerInfoWrapStyle}>
          <View>
            <Text style={{ ...Fonts.whiteColor20Medium }}>Ho-Med</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
          <AntDesign
             name="check" 
             size={27} 
             color={Colors.whiteColor}
             onPress={() => { 
              UpdateUser()
              navigation.navigate('Profile')
              }}
             />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}></View>
        
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Description</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
              <TextInput style={{ fontSize: 26 }}
              onChangeText={text => setUserNameEdit(text)}
              >{user.username}</TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <TextInput style={{ fontSize: 26 }}
              onChangeText={text => setemailEdit(text)}
              >{user.email}</TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <TextInput style={{ fontSize: 26 }}
              onChangeText={text => setPhoneNumberEdit(text)}
              >{user.phoneNumber}</TextInput>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 420 }}>
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
  header: {
    backgroundColor: "#10857F",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#10857F",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#10857F",
  },
});
