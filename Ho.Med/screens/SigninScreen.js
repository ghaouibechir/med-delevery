import React, { Component } from "react";
import styled from 'styled-components'
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
  Alert,
  TouchableOpacity,
 
} from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Fonts, Sizes } from "../constant/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TransitionPresets } from "react-navigation-stack";
import axios from 'axios'

class SigninScreen extends Component {
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
    password: "",
    emailAddress: "",
    message:'',
    typemsg:''
  };
  msg() {
      Alert.alert("Welcome", "connected successfully")
      this.props.navigation.push("navbar")
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={{ flex: 1 }}>
          {this.backArrow()}
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.appLogo()}
            {this.emailAddressTextField()}
            {this.passwordTextField()}
           
            {this.continueButton()}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  handlemsg(message,type='failed'){
    this.setState({message,type})

  }
  msg(){
   
      this.props.navigation.push("navbar")
      Alert.alert('welcome','User connected')
    
  }
  handleLogin(email=this.state.email,password=this.state.password){
   const url='http://192.168.43.184:5000/users/authenticate'
   axios.post(url,{email:email,password:password}).then((res)=>{
     const result=res.data
     const {message,status,data}=result
   }).catch(err=>{
     console.log(err.JSON());
   })
  }

  backArrow() {
    return (
      <MaterialIcons
        onPress={() => this.props.navigation.push("RegisterScreen")}
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

  registerText() {
    return (
      <Text
        style={{
          marginBottom: Sizes.fixPadding + 10.0,
          ...Fonts.primaryColor18Medium,
          textAlign: "center",
        }}
      >
        Sign In
      </Text>
    );
  }

  continueButton() {
    return (
      <TouchableOpacity
        onPress={() => this.msg()
      }
        activeOpacity={0.9}
        style={styles.continueButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor19Medium }}>Sign In</Text>
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
 const MsgBox = styled.Text`
color:red;
font-size:16px;
`
 

const styles = StyleSheet.create({
  continueButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryColor,
    paddingVertical: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding,
    borderRadius: Sizes.fixPadding - 5.0,
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
    borderRadius: Sizes.fixPadding - 5.0,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    height: 55.0,
    ...Fonts.primaryColor18Medium,
    marginHorizontal: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    marginTop: Sizes.fixPadding * 2.0,
  },
});

SigninScreen.navigationOptions = () => {
  return {
    header: () => null,
    ...TransitionPresets.SlideFromRightIOS,
  };
};

export default withNavigation(SigninScreen);
