import React, { Component } from "react";

import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  BackHandler,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TransitionPresets } from "react-navigation-stack";
import IntlPhoneInput from 'react-native-intl-phone-input';
import axios from "axios"

class RegisterScreen extends Component {
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
    fullName: "",
    password: "",
    emailAddress: "",
    PhoneNumber:'',
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{ flex: 1 }}>
          {this.backArrow()}
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.appLogo()}
            {this.registerText()}
            {this.fullNameTextField()}
            {this.userNameTextField()}
            {this.emailAddressTextField()}
            {this.phoneNumberTextField()}
            {this.passwordTextField()}
            {this.addressTextField()}
            {this.continueButton()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  phoneNumber () {

  }

  backArrow() {
    return (
      <MaterialIcons
        name="arrow-back"
        size={24}
        color="black"
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginTop: Sizes.fixPadding * 2.0,
        }}
        onPress={() => this.props.navigation.pop()}
      />
    );
  }

  phoneNumberTextField() {
    return (
      <IntlPhoneInput
        onChangeText={({ phoneNumber }) => { this.setState({ phoneNumber: phoneNumber }) }}
        defaultCountry="TN"
        containerStyle={styles.textFieldStyle}
        dialCodeTextStyle={{ ...Fonts.blackColor17Medium, marginLeft: Sizes.fixPadding - 5.0, }}
        phoneInputStyle={{
          flex: 1,
          marginLeft: Sizes.fixPadding,
          ...Fonts.blackColor17Medium,
                }}
        placeholder="PhoneNumber"
      />
    );
  }

  emailAddressTextField() {
    return (
      <TextInput
        placeholder="Email Address"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.emailAddress}
        onChangeText={(text) => this.setState({ emailAddress: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  passwordTextField() {
    return (
      <TextInput
        placeholder="Password"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.password}
        onChangeText={(text) => this.setState({ password: text })}
        secureTextEntry={true}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  fullNameTextField() {
    return (
      <TextInput
        placeholder="Full Name"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.fullName}
        onChangeText={(text) => this.setState({ fullName: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }
  userNameTextField() {
    return (
      <TextInput
        placeholder="username"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.username}
        onChangeText={(text) => this.setState({ username: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }
  addressTextField() {
    return (
      <TextInput
        placeholder="address"
        placeholderTextColor={Colors.primaryColor}
        value={this.state.address}
        onChangeText={(text) => this.setState({ address: text })}
        selectionColor={Colors.primaryColor}
        style={styles.textFieldStyle}
      />
    );
  }

  registerText() {
    return (
      <Text
        style={{
          marginBottom: Sizes.fixPadding + 10.0,
          ...Fonts.primaryColor18Medium,
          textAlign: "center",
        }}
      >
        join our family
      </Text>
    );
  }
  register(){
   console.log('fff'+this.state.PhoneNumber)
   this.props.navigation.push("verification",{PhoneNumber:this.state.PhoneNumber})
    // var url =' http://localhost:5000/user/register';
    // axios.post(url,).then( () =>{
    //   console.log(('hiiiiiiii'));
      
    // })
  }

  continueButton() {
    return (
      <TouchableOpacity
        onPress={() =>( 
          this.register()
          )}
        activeOpacity={0.9}
        style={styles.continueButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor19Medium }}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  appLogo() {
    return (
      <Image
        source={require("../assets/images/transparent-icon.png")}
        style={styles.appLogoStyle}
        resizeMode="contain"
      />
    );
  }
}

const styles = StyleSheet.create({
  continueButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding,
    borderRadius:20,
    marginTop: Sizes.fixPadding * 4.0,
  },
  appLogoStyle: {
    width: 200.0,
    height: 200.0,
    alignSelf: "center",
    marginBottom: Sizes.fixPadding,
    marginTop: Sizes.fixPadding * 3.0,
  },
  textFieldStyle: {
    borderColor: "rgba(0, 150, 136, 0.3)",
    borderWidth: 1.0,
    borderRadius: 20,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    height: 55.0,
    ...Fonts.primaryColor18Medium,
    marginHorizontal: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    marginTop: Sizes.fixPadding * 2.0,
  },
});

RegisterScreen.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
};
module.exports=this.state.phoneNumber
export default withNavigation(RegisterScreen);
