import {React,useContext,useEffect ,useState}  from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./CredentialsContext";
import Footer from "./Footer";
import axios from "axios";




export default function ProfileScreen({ navigation }) {

  const [user , setUser] = useState({})
  const [userId , setUserId] = useState(null)

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
      let response = await axios.get("http://192.168.1.20:5000/user/" + id)
      setUser(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }


  const {stored,setStored}=useContext(CredentialsContext);
  const clearLogin =()=>{
    AsyncStorage.removeItem('key').then(()=>{
      setStored(null)
    }).catch(err => console.log(err))
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
              name="edit"
              size={27}
              color={Colors.whiteColor}
              onPress={() => navigation.navigate("editProfile")}
            />
            <TouchableOpacity>
              <MaterialIcons
                name="shopping-cart"
                size={26}
                color={Colors.whiteColor}
                style={{ marginLeft: Sizes.fixPadding + 10.0 }}
                onPress={() => navigation.navigate("cart")}
              />
              <View style={styles.cartItemCountWrapStyle}>
                <Text style={{ ...Fonts.whiteColor15Regular }}></Text>
              </View>
            </TouchableOpacity>
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

            <View style={styles.buttonContainer}>
              <Text style={{ fontSize: 26 }}> {user.username}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Text style={{ fontSize: 15 }}> {user.email}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("feedback")}
            >
              <Text style={{ fontSize: 15 }}> Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={clearLogin}
            >
              <Text style={{ fontSize: 15 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 410 }}>
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
