import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  BackHandler,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Image,
  Dimensions,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { TransitionPresets } from "react-navigation-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DashedLine from "react-native-dashed-line";
import { TextInput } from "react-native-paper";
// import { BottomSheet } from "react-native-elements";
// import { SharedElement } from 'react-navigation-shared-element';

const { width, height } = Dimensions.get("screen");

class Cart extends Component {
  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButton.bind(this)
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButton.bind(this)
    );
  }

  handleBackButton = () => {
    this.props.navigation.pop();
    return true;
  };

  state = {
    quantityDialog: false,
    currentQuantity: null,
    cartItems: [],
    currentItemId: "",
    deliveryCharge: 5,
    deleteDialog: false,
    showBootomSheet: false,
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        {/* {this.header()} */}
        <View style={{ flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 17.0 }}
          >
            {this.freeDeliveryInfo()}
            {this.cartItems()}
            {this.addMoreItemsInfo()}

            {this.amountInfo()}

            {this.additionalNotesInfo()}
          </ScrollView>
          {this.deliverdAddressAndPaymentInfo()}
        </View>

        {this.selectQuantityDialog()}
        {this.deleteItemDialog()}
      </SafeAreaView>
    );
  }

  emptyCartInfo() {
    return (
      <View>
        <Text style={styles.emptyCartTextStyle}>{"Your Cart is\n Empty"}</Text>
        <Image
          source={require("../assets/images/empty_cart.png")}
          style={styles.emptyCartImageStyle}
          resizeMode="contain"
        />
      </View>
    );
  }

  searchInfo() {
    return (
      <View>
        <Text style={{ ...Fonts.whiteColor16Medium }}>
          Search medicines/healthcare products
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.navigation.push("Search")}
          style={styles.searchButtonStyle}
        >
          <MaterialIcons name="search" size={22} color={Colors.primaryColor} />
          <Text
            numberOfLines={1}
            style={{
              ...Fonts.primaryColor18Medium,
              marginLeft: Sizes.fixPadding,
              flex: 1,
            }}
          >
            Search medicines/healthcare products
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  offersProductsAndReturnsInfo() {
    return (
      <View style={styles.offersProductsAndReturnsInfoWrapStyle}>
        {this.offersProductsAndReturns({
          icon: (
            <MaterialCommunityIcons
              name="tag"
              size={18}
              color={Colors.whiteColor}
            />
          ),
          description: "Flat \n15% Off",
        })}
        {this.offersProductsAndReturns({
          icon: (
            <MaterialIcons
              name="security"
              size={18}
              color={Colors.whiteColor}
            />
          ),
          description: "1 Lakh+\n Products",
        })}
        {this.offersProductsAndReturns({
          icon: (
            <MaterialCommunityIcons
              name="layers-outline"
              size={20}
              color={Colors.whiteColor}
            />
          ),
          description: "Easy \nReturns",
        })}
      </View>
    );
  }

  // offersProductsAndReturns({ icon, description }) {
  //     return (
  //         <View style={{ flexDirection: 'row', }}>
  //             <View style={styles.offersProductsAndReturnsIconWrapStyle}>
  //                 {icon}
  //             </View>
  //             <Text style={{ lineHeight: 23.0, ...Fonts.whiteColor16Regular, marginLeft: Sizes.fixPadding }}>
  //                 {description}
  //             </Text>
  //         </View>
  //     )
  // }

  deleteItemDialog() {
    return (
      <Dialog.Container
        visible={this.state.deleteDialog}
        contentStyle={styles.deleteDialogWrapStyle}
        headerStyle={{ margin: 0.0 }}
      >
        <Text
          style={{
            ...Fonts.blackColor19Medium,
            paddingTop: Sizes.fixPadding - 5.0,
            paddingBottom: Sizes.fixPadding + 10.0,
          }}
        >
          Delete cart item?
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: Sizes.fixPadding * 2.0,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.setState({ deleteDialog: false })}
            style={styles.noButtonStyle}
          >
            <Text style={{ ...Fonts.primaryColor18Medium }}>No</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              this.removeItem();
              this.setState({ deleteDialog: false });
            }}
            style={styles.yesButtonStyle}
          >
            <Text style={{ ...Fonts.whiteColor18Medium }}>Yes</Text>
          </TouchableOpacity>
        </View>
      </Dialog.Container>
    );
  }

  deliverdAddressAndPaymentInfo() {
    return (
      <View style={styles.deliveryAndPaymentInfoWrapStyle}>
        {this.deliveredAddresInfo()}
        {this.totalAmountAndPaymentButton()}
      </View>
    );
  }

  totalAmountAndPaymentButton() {
    return (
      <View style={styles.totalAmountAndPaymentButtonWrapStyle}>
        <Text
          style={{
            ...Fonts.primaryColor25Medium,
            paddingLeft: Sizes.fixPadding * 5.0,
            paddingRight: Sizes.fixPadding * 4.0,
          }}
        >
          ${this.total()}
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => this.props.navigation.push("Payment")}
          style={styles.proceedToPaymentButtonStyle}
        >
          <Text style={{ ...Fonts.whiteColor19Medium }}>
            Proceed to Payment
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  deliveredAddresInfo() {
    return (
      <View style={styles.deliveredAddresInfoWrapStyle}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.deliveredAddressIconStye}>
            <Image
              source={require("../assets/images/icons/icon_9.png")}
              style={{ height: 50.0, width: 50.0 }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  width: width - 190.0,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text
                    style={{
                      ...Fonts.primaryColor17Regular,
                    }}
                  >
                    Deliver to
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      marginLeft: Sizes.fixPadding,
                      ...Fonts.primaryColor18Medium,
                    }}
                  >
                    Home
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.push("SelectAddress")}
              >
                <Text style={{ ...Fonts.primaryColor20Medium }}>CHANGE</Text>
              </TouchableOpacity>
            </View>

            {/* <Text style={{ ...Fonts.primaryColor18Medium }}>
                            91, Opera Street, Newyork, 10001
                        </Text> */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ ...Fonts.primaryColor17Regular }}>
                Deliver by:
              </Text>
              <Text
                style={{
                  marginLeft: Sizes.fixPadding,
                  ...Fonts.primaryColor18Medium,
                }}
              >
                25-Aug-2020
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  additionalNotesInfo() {
    return (
      <View style={styles.additionalNotesInfoWrapStyle}>
        <Text style={{ ...Fonts.primaryColor19Medium }}>Additional Notes</Text>
        <TextInput
          placeholder="Enter any additional information regarding your order"
          placeholderTextColor={Colors.grayColor}
          style={{
            ...Fonts.blackColor17Medium,
            backgroundColor: Colors.whiteColor,
          }}
          multiline={true}
          numberOfLines={4}
          mode="outlined"
          selectionColor={Colors.primaryColor}
          theme={{
            colors: {
              primary: Colors.primaryColor,
              underlineColor: Colors.grayColor,
            },
          }}
        />
      </View>
    );
  }

  total() {
    // const total = this.state.cartItems.reduce((sum, i) => {
    //     return sum += i.qty * i.discountPrice
    // }, 0);
    // return total;
  }

  amountInfo() {
    return (
      <View
        style={{
          backgroundColor: Colors.whiteColor,
          paddingHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...Fonts.primaryColor18Regular }}>Cart Value</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                ...Fonts.primaryColor18Light,
                textDecorationLine: "line-through",
              }}
            >
              {/* ${this.state.cartItems.reduce((sum, i) => (
                                sum += i.qty * i.price
                            ), 0)} */}
            </Text>
            <Text style={{ ...Fonts.primaryColor19Medium }}>
              {this.total()}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: Sizes.fixPadding - 5.0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...Fonts.primaryColor18Regular }}>
            Delivery Charge
          </Text>
          <Text style={{ ...Fonts.primaryColor19Medium }}>
            {this.total() > 10 ? `0` : `5`}
          </Text>
        </View>
        <DashedLine
          dashLength={5}
          dashThickness={2}
          dashGap={3}
          dashColor="rgba(0, 150, 136, 0.5)"
        />
        <View
          style={{
            flexDirection: "row",
            paddingVertical: Sizes.fixPadding - 5.0,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...Fonts.primaryColor19Medium }}>
            Amount to be paid
          </Text>
          <Text style={{ ...Fonts.primaryColor19Medium }}>
            ${this.total() + (this.total() > 10 ? 0 : 5)}
          </Text>
        </View>
      </View>
    );
  }

  addMoreItemsInfo() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.push("navbar")}
        style={styles.addMoreItemsInfoWrapStyle}
      >
        <Text style={{ ...Fonts.primaryColor19Medium }}>Add More Items</Text>
        <View style={styles.addIconWrapStyle}>
          <MaterialCommunityIcons
            name="plus"
            size={24}
            color={Colors.primaryColor}
          />
        </View>
      </TouchableOpacity>
    );
  }

  selectQuantityDialog() {
    return (
      <Modal
        animationType="none"
        transparent={true}
        visible={this.state.quantityDialog}
      >
        <TouchableWithoutFeedback>
          <View style={styles.selectQuantityModelStyle}>
            <View
              style={{
                width: width * 0.8,
                backgroundColor: Colors.whiteColor,
                borderRadius: Sizes.fixPadding,
              }}
            >
              <View style={styles.selectQuantityTitleStyle}>
                <Text style={{ ...Fonts.primaryColor20Medium }}>
                  Select Quantity
                </Text>
                <MaterialIcons
                  name="close"
                  size={24}
                  onPress={() => this.setState({ quantityDialog: false })}
                  color={Colors.primaryColor}
                />
              </View>
              <View
                style={{ backgroundColor: Colors.primaryColor, height: 1.0 }}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  this.removeItem();
                  this.setState({ quantityDialog: false });
                }}
              >
                <Text
                  style={{
                    margin: Sizes.fixPadding,
                    ...Fonts.primaryColor19Medium,
                  }}
                >
                  Remove item
                </Text>
              </TouchableOpacity>
              {this.quantity({ number: 1 })}
              {this.quantity({ number: 2 })}
              {this.quantity({ number: 3 })}
              {this.quantity({ number: 4 })}
              {this.quantity({ number: 5 })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  changeQuantity({ quantity }) {
    // const newList = this.state.cartItems.map((product) => {
    //     if (product.id === this.state.currentItemId) {
    //         const updatedItem = { ...product, qty: quantity, };
    //         return updatedItem;
    //     }
    //     return product;
    // });
    // this.setState({ cartItems: newList, })
  }

  quantity({ number }) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          this.setState({ currentQuantity: number });
          this.changeQuantity({ quantity: number });
          this.setState({ quantityDialog: false });
        }}
        style={{
          backgroundColor:
            this.state.currentQuantity == number
              ? "#E2E2E2"
              : Colors.whiteColor,
          borderBottomLeftRadius: number == 5 ? Sizes.fixPadding : 0.0,
          borderBottomRightRadius: number == 5 ? Sizes.fixPadding : 0.0,
          ...styles.selectedQuantityWrapStyle,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ ...Fonts.primaryColor19Medium }}>{number}</Text>
          {number == 5 ? (
            <Text
              style={{
                ...Fonts.primaryColor15Light,
                marginLeft: Sizes.fixPadding,
              }}
            >
              Max Qty
            </Text>
          ) : null}
        </View>
        {this.state.currentQuantity == number ? (
          <View style={styles.doneIconWrapStyle}>
            <MaterialIcons name="check" size={20} color={Colors.whiteColor} />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }

  cartItems() {
    return (
      <View>
        {this.state.cartItems.map((item) => (
          <View key={`${item.id}`}>
            <View
              style={{
                backgroundColor: Colors.whiteColor,
                paddingHorizontal: Sizes.fixPadding * 2.0,
                paddingBottom: Sizes.fixPadding * 2.0,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  {/* <Image
                                        source={item.image}
                                        style={{ width: 50.0, height: 50.0 }}
                                        resizeMode="contain"
                                    /> */}
                  <View
                    style={{
                      width: width - 150.0,
                      marginLeft: Sizes.fixPadding,
                    }}
                  >
                    {/* <Text style={{ ...Fonts.primaryColor19Medium, lineHeight: 25.0, }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ ...Fonts.primaryColor18Regular, lineHeight: 23.0, }}>
                                            BY {item.manufacturer}
                                        </Text>
                                        <Text style={{ ...Fonts.primaryColor19Medium }}>
                                            {item.detail}
                                        </Text>
                                        <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding, alignItems: 'center' }}>
                                            <Text style={{ ...Fonts.primaryColor25Medium }}>
                                                ${item.discountPrice}
                                            </Text>
                                            <Text style={{ marginHorizontal: Sizes.fixPadding + 2.0, ...Fonts.primaryColor18Light, textDecorationLine: "line-through" }}>
                                                ${item.price}
                                            </Text>
                                            <View style={styles.offerWrapStyle}>
                                                <Text style={{ ...Fonts.whiteColor16Medium }}>
                                                    {item.percentageOff}% OFF
                                                </Text>
                                            </View>
                                        </View> */}
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() =>
                        this.setState({
                          quantityDialog: true,
                          currentItemId: item.id,
                          currentQuantity: item.qty,
                        })
                      }
                      style={styles.quantityCountWrapStyle}
                    >
                      <Text
                        style={{
                          ...Fonts.primaryColor19Medium,
                          marginRight: Sizes.fixPadding - 7.0,
                        }}
                      >
                        Qty {item.qty}
                      </Text>
                      <MaterialIcons
                        name="arrow-drop-down"
                        size={24}
                        color={Colors.primaryColor}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <MaterialIcons
                  name="delete"
                  size={24}
                  color={Colors.primaryColor}
                  onPress={() => {
                    this.setState({ currentItemId: item.id });
                    this.setState({ deleteDialog: true });
                  }}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }

  removeItem() {
    // let filterArray = this.state.cartItems.filter((val, i) => {
    //     if (val.id !== this.state.currentItemId) {
    //         return val;
    //     }
    // })
    // this.setState({ cartItems: filterArray })
  }

  freeDeliveryInfo() {
    return (
      <View style={styles.freeDeliveryInfoWrapStyle}>
        <View style={styles.freeDeliveryInfoStyle}>
          <Image
            source={require("../assets/images/icons/icon_12.png")}
            style={{ width: 20.0, height: 20.0 }}
          />
          <Text
            style={{
              ...Fonts.primaryColor18Regular,
              flex: 1,
              lineHeight: 23.0,
              paddingTop: Sizes.fixPadding - 2.0,
              marginLeft: Sizes.fixPadding + 2.0,
            }}
          >
            Free delivery with cart value above $10
          </Text>
        </View>
      </View>
    );
  }

  // header() {
  //     return (
  //         <View style={styles.headerWrapStyle}>
  //             <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  //                 <MaterialIcons name="arrow-back" size={24} color={Colors.whiteColor}
  //                     onPress={() => this.props.navigation.pop()}
  //                 />
  //                 <Text style={{ ...Fonts.whiteColor19Medium, marginLeft: Sizes.fixPadding + 5.0 }}>
  //                     {this.state.cartItems.length} Item in Cart
  //                 </Text>
  //             </View>
  //             <MaterialIcons name="search" size={24} color={Colors.whiteColor}
  //                 onPress={() => this.props.navigation.push('Search')}
  //             />
  //         </View>
  //     )
  // }
}

const styles = StyleSheet.create({
  headerWrapStyle: {
    backgroundColor: Colors.primaryColor,
    height: 56.0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: Sizes.fixPadding * 2.0,
    paddingRight: Sizes.fixPadding,
  },
  offerWrapStyle: {
    backgroundColor: Colors.redColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding - 6.0,
    paddingHorizontal: Sizes.fixPadding - 4.0,
  },
  quantityCountWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    borderRadius: Sizes.fixPadding - 5.0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding - 8.0,
  },
  freeDeliveryInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingTop: Sizes.fixPadding * 2.0,
    paddingBottom: Sizes.fixPadding * 4.0,
  },
  freeDeliveryInfoStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
    borderColor: Colors.grayColor,
    borderStyle: "dashed",
    borderRadius: Sizes.fixPadding,
    borderWidth: 1.0,
    paddingVertical: Sizes.fixPadding - 5.0,
    paddingHorizontal: Sizes.fixPadding - 5.0,
  },
  selectedQuantityWrapStyle: {
    paddingVertical: Sizes.fixPadding - 5.0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding + 2.0,
  },
  doneIconWrapStyle: {
    width: 25.0,
    height: 25.0,
    borderRadius: 12.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.redColor,
  },
  selectQuantityTitleStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: Sizes.fixPadding * 2.0,
  },
  selectQuantityModelStyle: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.50)",
    alignItems: "center",
    justifyContent: "center",
  },
  addMoreItemsInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    marginTop: Sizes.fixPadding,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Sizes.fixPadding * 2.0,
  },
  addIconWrapStyle: {
    width: 30.0,
    height: 30.0,
    borderRadius: 15.0,
    backgroundColor: Colors.whiteColor,
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    alignItems: "center",
    justifyContent: "center",
  },
  handPickedItemsInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderColor: "rgba(0, 150, 136, 0.3)",
    borderWidth: 1.0,
    borderRadius: Sizes.fixPadding,
    marginRight: Sizes.fixPadding * 2.0,
    width: 190.0,
    height: 180.0,
    alignItems: "center",
    justifyContent: "center",
  },
  percentageOffWrapStyle: {
    position: "absolute",
    left: -0.6,
    top: -0.5,
    backgroundColor: Colors.redColor,
    borderTopLeftRadius: Sizes.fixPadding,
    borderBottomRightRadius: Sizes.fixPadding,
    padding: Sizes.fixPadding - 4.0,
  },

  deliveryAndPaymentInfoWrapStyle: {
    position: "absolute",
    bottom: 0.0,
    left: 0.0,
    right: 0.0,
  },
  totalAmountAndPaymentButtonWrapStyle: {
    backgroundColor: Colors.whiteColor,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding,
    alignItems: "center",
  },
  proceedToPaymentButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  deliveredAddresInfoWrapStyle: {
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding,
    paddingTop: Sizes.fixPadding - 5.0,
  },
  deliveredAddressIconStye: {
    height: 80.0,
    backgroundColor: Colors.whiteColor,
    width: 80.0,
    borderRadius: 40.0,
    alignItems: "center",
    justifyContent: "center",
  },
  someTermsAndConditionsWrapStyle: {
    marginVertical: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
    alignSelf: "flex-start",
    paddingVertical: Sizes.fixPadding * 2.0,
  },
  termsAndConditionBulletStyle: {
    marginTop: Sizes.fixPadding - 6.0,
    width: 8.0,
    alignSelf: "flex-start",
    height: 8.0,
    borderRadius: 4.0,
    backgroundColor: Colors.primaryColor,
  },
  additionalNotesInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    marginTop: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingBottom: Sizes.fixPadding * 2.0,
    paddingTop: Sizes.fixPadding + 5.0,
  },
  totalSavingInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingTop: Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding * 2.0,
  },
  totalSavingInfoStyle: {
    backgroundColor: Colors.bodyBackColor,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderStyle: "dashed",
    borderColor: Colors.primaryColor,
    borderWidth: 1.0,
    padding: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding,
  },
  dollarIconWrapStyle: {
    width: 30.0,
    height: 30.0,
    borderRadius: 15.0,
    backgroundColor: Colors.orangeColor,
    alignItems: "center",
    justifyContent: "center",
  },
  noButtonStyle: {
    backgroundColor: "#E0E0E0",
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    flex: 1.0,
    marginRight: Sizes.fixPadding,
  },
  yesButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    flex: 1.0,
    marginLeft: Sizes.fixPadding,
  },
  deleteDialogWrapStyle: {
    width: width - 80.0,
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding,
    alignItems: "center",
    paddingBottom: Sizes.fixPadding * 2.0,
  },
  offersProductsAndReturnsIconWrapStyle: {
    width: 32.0,
    height: 32.0,
    borderRadius: 16.0,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.whiteColor,
    borderWidth: 1.0,
  },
  offersProductsAndReturnsInfoWrapStyle: {
    flexDirection: "row",
    borderColor: Colors.whiteColor,
    borderStyle: "dashed",
    borderRadius: Sizes.fixPadding,
    borderWidth: 1.0,
    justifyContent: "space-evenly",
    paddingVertical: Sizes.fixPadding,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  searchButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding + 1.0,
    marginTop: Sizes.fixPadding,
  },
  emptyCartImageStyle: {
    alignSelf: "flex-end",
    marginRight: Sizes.fixPadding * 2.0,
    width: 140.0,
    height: 140.0,
    marginTop: Sizes.fixPadding - 30.0,
  },
  emptyCartTextStyle: {
    paddingTop: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    ...Fonts.primaryColor25Medium,
    lineHeight: 25.0,
  },
  bottomSheetStyle: {
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: Sizes.fixPadding,
    borderTopRightRadius: Sizes.fixPadding,
    height: height / 1.8,
  },
});

Cart.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
};

export default withNavigation(Cart);
