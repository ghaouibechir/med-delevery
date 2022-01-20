import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Button,
  ScrollView,
  FlatList,
  Icon,
  TextInput,
  I18nManager,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Footer from "./Footer";
import axios from "axios";
import data from "react-native-ico/src/data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./CredentialsContext";


class Navbar extends Component {
  static contextType = CredentialsContext
  constructor(props) {
    super(props);
    this.state = {
      medecine: [],
      medecines: [],
      orderId: "",
      value: 0,
      spesificMed : "" ,

    };
  }

  componentDidMount() {
    this.fetchdata();
    AsyncStorage.getItem('key').then((d) => { console.log('qqqqqqqqqqqqqqq', d); })
  }

  fetchdata = async () => {
    try {
      let response = await axios.get("http://192.168.1.113:5000/medecine");
      this.setState({medecine:response.data});
      this.setState({medecines:response.data});
    } catch (error) {
      console.log(error);
    }
  };

  fetchParasData = async () => {
    try {
      let response = await axios.get("http://192.168.1.113:5000/para/paras");
      this.setState({medecine:response.data});
    } catch (error) {
      console.log(error);
    }
  };


  myCart(id) {
    console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyy", id)
     this.incrementValue() 
   
    axios.put(`http://192.168.1.113:5000/OrderId/${'bechir'}`, { id })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => { console.log(err) });
  }


  incrementValue() {
    this.setState({
      value: this.state.value + 1
    })
    console.log("value+" + (this.state.value + 1))
  }

  searshForMedicines (medName) {
    var res = []
    var meds = this.state.medecine
    if(medName == "") {
      this.setState({medecine: this.state.medecines})
      return;
    }
    for(var i = 0 ; i < meds.length; i++) {
      if(meds[i].name.split(medName).length > 1) {
        res.push(meds[i])
      }
    }
    this.setState({medecine : res})
  }

  allMeds () {
    this.setState({medecine: this.state.medecines})
  }

  covidMeds () {
    var res = []
    for(var i = 0 ; i < this.state.medecines.length; i++) {
      if(this.state.medecines[i].category === "COVID CARE AND PROTECTION") {
        res.push(this.state.medecines[i])
      }
    }
    this.setState({medecine: res})
  }

  teethMeds () {
    var res = []
    for(var i = 0 ; i < this.state.medecines.length; i++) {
      if(this.state.medecines[i].category === "Teeth") {
        res.push(this.state.medecines[i])
      }
    }
    this.setState({medecine: res})
  }

  cardiohMeds () {
    var res = []
    for(var i = 0 ; i < this.state.medecines.length; i++) {
      if(this.state.medecines[i].category === "Cardio") {
        res.push(this.state.medecines[i])
      }
    }
    this.setState({medecine: res})
  }

  noseMeds () {
    var res = []
    for(var i = 0 ; i < this.state.medecines.length; i++) {
      if(this.state.medecines[i].category === "Nose") {
        res.push(this.state.medecines[i])
      }
    }
    this.setState({medecine: res})
  }

  eyesMeds () {
    var res = []
    for(var i = 0 ; i < this.state.medecines.length; i++) {
      if(this.state.medecines[i].category === "Eyes") {
        res.push(this.state.medecines[i])
      }
    }
    this.setState({medecine: res})
  }

  headMeds () {
    var res = []
    for(var i = 0 ; i < this.state.medecines.length; i++) {
      if(this.state.medecines[i].category === "Head") {
        res.push(this.state.medecines[i])
      }
    }
    this.setState({medecine: res})
  }
  scrollListToStart(contentWidth, contentHeight) {
    if (I18nManager.isRTL) {
        this.scrollView.scrollTo({x: contentWidth});
    }
}



  render() {
    let containerStyle = I18nManager.isRTL ? styles.RTLContainer : styles.LTRContainer;
    return (
      <View style={styles.container}>
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
                onPress={() => this.props.navigation.push("localisation")}
              />
              <TouchableOpacity>
                <MaterialIcons
                  name="shopping-cart"
                  size={26}
                  color={Colors.whiteColor}
                  style={{ marginLeft: Sizes.fixPadding + 10.0 }}
                  onPress={() => this.props.navigation.push("cart")}
                />
                <View style={styles.cartItemCountWrapStyle}>
                  <Text>{this.state.value}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.searchButtonStyle}>
            <MaterialIcons
              name="search"
              size={22}
              color={Colors.primaryColor}
              onPress={() => this.searshForMedicines(this.state.spesificMed)}
            />
            <TextInput
              onChangeText={(text) => {
                this.setState({ spesificMed: text });
                this.searshForMedicines(this.state.spesificMed);
              }}
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
        <View>
          <Button
            style={styles.bat}
            title="Prescription"
            onPress={() => this.props.navigation.navigate("Camera")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
           <ScrollView
            ref={ref => this.scrollView = ref}
            onContentSizeChange={this.scrollListToStart.bind(this)}
            horizontal={true}
            style={[styles.buttonsContainer, containerStyle]}>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.allMeds()}
          >
            <Text>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.covidMeds()}
          >
            <Text>COVID</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.teethMeds()}
          >
            <Text>TEETH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.cardiohMeds()}
          >
            <Text>CARDIO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.noseMeds()}
          >
            <Text>NOSE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.eyesMeds()}
          >
            <Text>EYES</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.headMeds()}
          >
            <Text>HEAD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginRight : 20,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 55,
              height: 55,
              backgroundColor: "#10857F",
              borderRadius: 50,
            }}
            onPress={() => this.fetchParasData()}
          >
            <Text>PARAS</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.medecine}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.name;
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />;
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.price}>{item.price} TND</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{ uri: item.img }} />

                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.socialBarButton}
                        onPress={() => {
                          this.myCart(item._id);
                        }}
                      >
                        <Image
                          style={styles.icon}
                          source={{
                            uri: "https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png",
                          }}
                        />
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>
                          Buy Now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <Footer />
      </View>
    );
  }
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
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
    flexBasis: "47%",
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: "green",
    marginTop: 5,
  },
  buyNow: {
    color: "purple",
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
    RTLContainer: {
        flexDirection: 'row-reverse'
    },

    LTRContainer: {
        flexDirection: 'row'
    },
});
Navbar.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
};
export default Navbar;
