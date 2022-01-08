
import {
  SafeAreaView,

  View,
  
  Text,
  
  StyleSheet,
  TextInput,
 
  TouchableOpacity,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
const Navbar = ({ navigation }) => {
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
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={27}
              color={Colors.whiteColor}
              onPress={() => navigation.navigate("localisation")}
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
        <TouchableOpacity style={styles.searchButtonStyle}>
          <MaterialIcons name="search" size={22} color={Colors.primaryColor} />
          <TextInput
            numberOfLines={1}
            selectionColor={Colors.primaryColor}
            style={{
              ...Fonts.primaryColor18Regular,
              flex: 1,
              marginLeft: Sizes.fixPadding,
            }}
            placeholderTextColor={Colors.primaryColor}
            placeholder="Search Medicines"
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 720 }}>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

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

export default Navbar;
