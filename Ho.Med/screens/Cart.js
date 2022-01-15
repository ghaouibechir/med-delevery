import React, { Component } from 'react';

import {
  SafeAreaView,
  StatusBar,
  View,
  Animated,
  Text,
  BackHandler,
  StyleSheet,
  Button,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors, Fonts, Sizes } from "../constant/styles";

import axios from "axios"
export default class Cart extends Component {
  constructor(props) {

    super(props);
    this.state = {
      data: [],
      Valuue:[],
      value: 0,
      totalPrice: 0,

    };
  }
  incrementValue() {
    this.setState({
      value: this.state.value + 1

    })
    console.log("value+" + (this.state.value + 1))
  }
  // decrementValue() {
  //   this.setState({
  //     value: this.state.value - 1
  //   })
  //   console.log("value+" + (this.state.value - 1))
  // }
  decrementValue() {
    if(this.state.value===0){
      this.setState({
        value: 0
    })
    
    }else {
      this.setState({
        value: this.state.value - 1
    })
    console.log("value+" + (this.state.value - 1))
  }}
  componentDidMount() {
    this.fetchdata();
  }
  confirm() {
    axios.put(`http://192.168.43.216:5000/ListOrderById/${'bechir'}`, {})
      .then((res) => {
        console.log(res)
      })
      .catch((err) => { console.log(err) });
  }
  // fetchdata = async () => {
  //   try {
  //     let response = await axios.get("http://192.168.11.55:5000/ordre/cart");
  //     this.setState({ order: response.data });
  //     console.log("AAAAAAAAAAAAAAAA",order)


  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  fetchdata() {
    axios.get(`http://192.168.43.216:5000/medecine/cart/${'bechir'}`).then(({ data }) => {
      this.setState({ data: data })
      console.log("12121212121212121212121", this.state.data)
    })

  }
  clickEventListener = (item) => {
    Alert.alert("Item selected: " + item.name)
  }

  __getCompletedIcon = () => {

    return "https://img.icons8.com/flat_round/64/000000/checkmark.png";

  }

  __getDescriptionStyle = (item) => {
    if (item.completed == 1) {
      return { textDecorationLine: "line-through", fontStyle: 'italic', color: "#808080" };
    }
  }






  render() {
    return (

      <View style={styles.container}>
        <FlatList
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (

              <View>
                <TouchableOpacity style={[styles.card, { borderColor: item.color }]} onPress={() => { this.clickEventListener(item) }}>
                  <Image style={styles.img} source={{ uri: this.__getCompletedIcon(item) }} />
                  <View style={styles.cardContent}>


                    <Text style={[styles.description, this.__getDescriptionStyle(item)]}>{item.name}</Text>
                    <Text size={29}>Price :{item.price}DT</Text>
                    <Text>    </Text>
                    <View style={{ flexDirection: "column"}}>
                      <MaterialCommunityIcons
                        name="plus"
                        size={29}
                        onPress={() =>this.incrementValue() }
                      />
                      <Text>    </Text>
                      <View style={{ fontSize: 900 }}><Text>Quantity : {this.state.value}</Text></View>
                      <Text>    </Text>
                      <MaterialCommunityIcons
                        name="minus"
                        size={29}
                        onPress={() => this.decrementValue()}
                      />
                    </View>
                  </View>

                </TouchableOpacity>


              </View>



            )
          }} />
        <View>
          <Button
            onPress={() => this.confirm()}
            title="Confirm"
            color="#10857F"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

      </View>



    );
  }

}
//     <Button
//    onPress={()=>this.confirm()}
//    title="Confirm"
//   color="#10857F"
//    accessibilityLabel="Learn more about this purple button"
//  />



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
    backgroundColor: "#eeeeee"
  },
  tasks: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 25,
    height: 25,
  },

  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderLeftWidth: 6,
  },

  description: {
    fontSize: 18,
    flex: 1,
    color: "#008080",
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    flex: 1,
    color: "#696969",
    marginTop: 5
  },
});

// Cart.navigationOptions = () => {
//   return {
//     header: () => null,
//     ...TransitionPresets.SlideFromRightIOS,
//   };
// };
// export default withNavigation(Cart);
